import React, { useState, useEffect } from "react";
import { Grid, CardHeader, Card, CardContent, TextField, makeStyles, InputAdornment, MenuItem, FormControl, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import MapContainer from "../../components/MapComponent";
import Geocode from "react-geocode";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    maxWidth: "75%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    background: "#f3f3f3",
    margin: "40px auto"
  },
  card: {
    maxWidth: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function Results(props) {
  const classes = useStyles();

  let fullAddress = "";
  let coordinates = {
    lati: 0,
    long: 0
  };

  function renderResults() {
    if (sessionStorage.getItem("userData")) {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      console.log("History's data: ", userData);

      fullAddress = userData.streetAddress + " " + userData.city + " " + userData.state + " " + userData.zipCode;
      Geocode.setApiKey("AIzaSyBYR-fyWSCdQ3XfZohzXX2adrSyta-qYGo");
      //Geocode.setLanguage("en");
      Geocode.fromAddress(fullAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          coordinates["lati"] = lat;
          coordinates["long"] = lng;
          console.log(coordinates);
        },
        (error) => {
          console.error(error);
        }
      );

      var heightMessage = "No height provided";

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

      return (
        <div>
          <hr></hr>
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
            <strong>Address: </strong>
            {userData.streetAddress + " " + userData.streetAddressExtra + ", " + userData.city + ", " + userData.state + " " + userData.zipCode}
          </p>
          <p>
            <strong>Education Level: </strong>I'm missing education levels. Not shown on Figma!
          </p>
          <p>
            <strong>Email: </strong>
            {userData.email}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Did not receive data object inside history as its null.</h1>
        </div>
      );
    }
  }

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classes.root}>
        <Grid item xs>
          <Card className={classes.card}>
            <CardHeader title="Results from Survey" />
            <CardContent>{renderResults()}</CardContent>
          </Card>
        </Grid>

        <Grid item xs>
          <MapContainer coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
}

export default Results;
