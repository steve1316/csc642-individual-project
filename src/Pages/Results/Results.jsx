import React, { useState } from "react";
import { Grid, CardHeader, Card, CardContent, makeStyles, CircularProgress, Button } from "@material-ui/core";
import MapContainer from "../../components/MapComponent";
import Geocode from "react-geocode";
import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100vw",
		maxWidth: "75%",
		height: "80vh",
		maxHeight: "50%",
		position: "absolute",
		left: "50%",
		top: "30%",
		transform: "translate(-50%, -50%)",
		margin: "40px auto"
	},
	card: {
		maxWidth: "100%",
		boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
		background: "#f3f3f3",
		height: "70vh"
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

function Results(props) {
	const classes = useStyles();

	// These states will check if Geocode is ready for the Map to render.
	const [isGeocodeDone, setIsGeocodeDone] = useState(false);
	const [mapCheck, setMapCheck] = useState(false);

	let fullAddress = "";
	var coordinates = {
		lati: 0,
		long: 0
	};

	function renderResults() {
		if (sessionStorage.getItem("userData")) {
			// Grab the data from Survey page.
			const userData = JSON.parse(sessionStorage.getItem("userData"));
			console.log("History's data: ", userData);

			// Construct the full address minus the extra bit as it is unnecessary to get coordinates from Geocode.
			fullAddress = userData.streetAddress + " " + userData.city + " " + userData.state + " " + userData.zipCode;

			Geocode.setApiKey("AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo");

			// Geocode will take the provided address and then return coordinates in the form of latitude and longtitude. It will then save them
			// and then wait for 2500ms for the Show Map button to render.
			Geocode.fromAddress(fullAddress).then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;
					coordinates["lati"] = lat;
					coordinates["long"] = lng;
					setTimeout(() => {
						setIsGeocodeDone(true);
					}, 2500);
				},
				(error) => {
					console.error(error);
				}
			);

			var heightMessage = "No height provided";
			var educationMessage = "No education level provided";

			// Assign appropriate values to height and education if the user did decide to fill them out since they are optional.
			if (userData.heightFT !== "" || userData.heightIN !== "") {
				var heightFT = userData.heightFT;
				var heightIN = userData.heightIN;
				if (userData.heightFT === "" && userData.heightIN !== "") {
					heightFT = 0;
				}
				if (userData.heightFT !== "" && userData.heightIN === "") {
					heightIN = 0;
				}
				heightMessage = heightFT + " ft " + heightIN + " in";
			}

			if (userData.educationLevel !== "") {
				educationMessage = userData.educationLevel;
			}

			// Return this div populated with the user's information.
			return (
				<div>
					<p>
						<strong>Name: </strong>
						{userData.firstName + " " + userData.lastName}
					</p>
					<p>
						<strong>Birthday: </strong>Born on {userData.birthday}
					</p>
					<p>
						<strong>Height: </strong>
						{heightMessage}
					</p>
					<p>
						<strong>Phone: </strong>
						{userData.phone}
					</p>
					<p>
						<strong>Address: </strong>
						{userData.streetAddress + " " + userData.streetAddressExtra + ", " + userData.city + ", " + userData.state + " " + userData.zipCode}
					</p>
					<p>
						<strong>Education Level: </strong>
						{educationMessage}
					</p>
					<p>
						<strong>Email: </strong>
						{userData.email}
					</p>
					{isGeocodeDone ? (
						<Button variant="contained" color="primary" onClick={showMap}>
							Click to show Map
						</Button>
					) : (
						<CircularProgress />
					)}
				</div>
			);
		} else {
			// Return this if the user somehow arrived in the Results page without going through the Survey page.
			return (
				<div>
					<h1>Did not receive data object inside history as its null.</h1>
				</div>
			);
		}
	}

	function showMap() {
		// Set booleans to show the map when the Show Map button is clicked.
		if (coordinates["lati"] !== 0 && coordinates["long"] !== 0) {
			console.log("Map is now shown!");
			setMapCheck(true);
		} else {
			console.log("Map's coordinates at (0,0)!");
			setMapCheck(false);
		}
	}

	return (
		<>
			<Header title={"Results Verification Page - Steve Tu"} />
			<Grid container direction="row" justify="flex-start" alignItems="center" spacing={2} className={classes.root}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardHeader title="Results from Survey" />
						<hr />
						<CardContent>{renderResults()}</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardHeader title="Google Map" />
						<hr />
						<CardContent>
							{mapCheck && (
								<Grid item xs>
									<MapContainer coordinates={coordinates} />
								</Grid>
							)}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}

export default Results;
