import React, { useState, useEffect } from "react";
import { Grid, CardHeader, Card, CardContent, TextField, makeStyles, InputAdornment, MenuItem, FormControl, FormControlLabel, Checkbox, Button, FormLabel, RadioGroup, Radio } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/Header";
import MuiPhoneNumber from "material-ui-phone-number";

const listOfStates = require("./listOfStates"); // Grab the list of all 50 states from listOfStates.js

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "40px auto",
		width: "100vw",
		height: "80%",
		maxWidth: "75%",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
		background: "#f3f3f3",
		overflow: "auto"
	},
	card: {
		overflow: "auto"
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

function Survey(props) {
	const classes = useStyles();

	// Setting states for the data object for the survey.

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [birthday, setBirthday] = useState("");

	const [heightFT, setHeightFT] = useState("");
	const [heightIN, setHeightIN] = useState("");

	const [phone, setPhone] = useState("");

	const [educationLevel, setEducationLevel] = useState("");

	const [streetAddress, setStreetAddress] = useState("");
	const [streetAddressExtra, setStreetAddressExtra] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");

	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");

	const [checkedTermsAndConditions, setCheckedTermsAndConditions] = useState(false);
	const [checkedCaptcha, setCheckedCaptcha] = useState(false);
	const [checkedValidationNameError, setCheckedValidationNameError] = useState(false);
	const [checkedAddressError, setCheckedAddressError] = useState(false);
	const [checkedZipCodeError, setCheckedZipCodeError] = useState(false);
	const [checkedEmailError, setCheckedEmailError] = useState(false);
	const [checkedConfirmEmailError, setCheckedConfirmEmailError] = useState(false);

	const [containsError, setContainsError] = useState(false);
	const [addressErrorText, setAddressErrorText] = useState("");
	const [zipCodeErrorText, setZipCodeErrorText] = useState("");
	const [emailErrorText, setEmailErrorText] = useState("");
	const [confirmEmailErrorText, setConfirmEmailErrorText] = useState("");

	// This gets called only once after refreshing or pressing the back button to repopulate the fields with your old information.
	useEffect(() => {
		if (sessionStorage.getItem("userData")) {
			const userData = JSON.parse(sessionStorage.getItem("userData"));
			console.log("Found your old data! Data: ", userData);

			setFirstName(userData.firstName);
			setLastName(userData.lastName);
			setBirthday(userData.birthday);
			setHeightFT(userData.heightFT);
			setHeightIN(userData.heightIN);
			setPhone(userData.phone);
			setEducationLevel(userData.educationLevel);
			setStreetAddress(userData.streetAddress);
			setStreetAddressExtra(userData.streetAddressExtra);
			setZipCode(userData.zipCode);
			setCity(userData.city);
			setState(userData.state);
			setEmail(userData.email);
		} else {
			console.log("You are starting fresh!");
		}
	}, []);

	// Every time the textfields are updated, this data object will be updated along with it.
	const data = {
		firstName: firstName,
		lastName: lastName,
		birthday: birthday,
		heightFT: heightFT,
		heightIN: heightIN,
		phone: phone,
		educationLevel: educationLevel,
		streetAddress: streetAddress,
		streetAddressExtra: streetAddressExtra,
		zipCode: zipCode,
		city: city,
		state: state,
		email: email,
		confirmEmail: confirmEmail,
		checkedTermsAndConditions: checkedTermsAndConditions,
		checkedCaptcha: checkedCaptcha,
		checkedValidationNameError: checkedValidationNameError
	};

	// This useEffect will run after data updates to check for form validation.
	useEffect(() => {
		if (firstName.length + lastName.length > 40) {
			setCheckedValidationNameError(true);
		} else {
			setCheckedValidationNameError(false);
		}

		var stringCheckedForLength = false;
		var streetAddressNotEmpty = false;
		var stringCheckedForAlphaNumeric = checkStringAlphaNumeric(streetAddress);

		var zipCodeCheckedForLength = false;
		var zipCodeNotEmpty = false;
		var stringCheckedForNumeric = checkStringNumeric(zipCode);

		var emailCheckedForLength = false;
		var emailNotEmpty = false;
		var emailCheckedForValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
		var emailsMatch = false;

		if (streetAddress.length < 41) {
			stringCheckedForLength = true;
		}
		if (streetAddress !== "") {
			streetAddressNotEmpty = true;
		}

		if (zipCode.length < 6) {
			zipCodeCheckedForLength = true;
		}
		if (zipCode !== "") {
			zipCodeNotEmpty = true;
		}

		if (email.length < 41) {
			emailCheckedForLength = true;
		}
		if (email !== "") {
			emailNotEmpty = true;
		}
		if (email === confirmEmail) {
			emailsMatch = true;
		}

		if (stringCheckedForAlphaNumeric && stringCheckedForLength && streetAddressNotEmpty) {
			setCheckedAddressError(false);
		} else if (!stringCheckedForAlphaNumeric && !stringCheckedForLength && streetAddressNotEmpty) {
			setAddressErrorText("Address contains non-alphanumeric characters and cannot be more than 40 characters");
			setCheckedAddressError(true);
		} else if (!stringCheckedForAlphaNumeric && stringCheckedForLength && streetAddressNotEmpty) {
			setAddressErrorText("Address contains non-alphanumeric characters");
			setCheckedAddressError(true);
		} else if (stringCheckedForAlphaNumeric && !stringCheckedForLength && streetAddressNotEmpty) {
			setAddressErrorText("Address cannot be more than 40 characters");
			setCheckedAddressError(true);
		} else {
			setCheckedAddressError(false); // Field is empty
		}

		if (zipCodeCheckedForLength && stringCheckedForNumeric && zipCodeNotEmpty) {
			setCheckedZipCodeError(false);
		} else if (!zipCodeCheckedForLength && !stringCheckedForNumeric && zipCodeNotEmpty) {
			setZipCodeErrorText("ZIP Code contains non-numeric characters and cannot be more than 5 numbers");
			setCheckedZipCodeError(true);
		} else if (zipCodeCheckedForLength && !stringCheckedForNumeric && zipCodeNotEmpty) {
			setZipCodeErrorText("ZIP Code contains non-numeric characters");
			setCheckedZipCodeError(true);
		} else if (!zipCodeCheckedForLength && stringCheckedForNumeric && zipCodeNotEmpty) {
			setZipCodeErrorText("ZIP Code cannot be more than 5 numbers");
			setCheckedZipCodeError(true);
		} else {
			setCheckedZipCodeError(false); // Field is empty
		}

		if (emailCheckedForLength && emailCheckedForValidation && emailNotEmpty) {
			setCheckedEmailError(false);
		} else if (!emailCheckedForLength && !emailCheckedForValidation && emailNotEmpty) {
			setEmailErrorText("Invalid email and cannot be more than 40 characters");
			setCheckedEmailError(true);
		} else if (!emailCheckedForLength && emailCheckedForValidation && emailNotEmpty) {
			setEmailErrorText("Email cannot be more than 40 characters");
			setCheckedEmailError(true);
		} else if (emailCheckedForLength && !emailCheckedForValidation && emailNotEmpty) {
			setEmailErrorText("Invalid email");
			setCheckedEmailError(true);
		} else {
			setCheckedEmailError(false); // Field empty
		}

		if (emailsMatch) {
			setCheckedConfirmEmailError(false);
		} else {
			setConfirmEmailErrorText("Emails must match!");
			setCheckedConfirmEmailError(true);
		}

		if (checkedAddressError || checkedZipCodeError || checkedEmailError || checkedConfirmEmailError || checkedValidationNameError) {
			setContainsError(true);
		} else {
			setContainsError(false);
		}
	}, [data]);

	// Checks character codes against ASCII codes and returns false if character is not alphanumeric.
	//Otherwise, finish the for loop and then return true.
	function checkStringAlphaNumeric(myString) {
		for (var i = 0; i < myString.length; i++) {
			var charCode = myString.charCodeAt(i);

			if (!(charCode === 32) && !(charCode > 47 && charCode < 58) && !(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)) {
				return false;
			}
		}
		return true;
	}

	// Checks character codes against ASCII codes and returns false if character is not numeric.
	//Otherwise, finish the for loop and then return true.
	function checkStringNumeric(myString) {
		for (var i = 0; i < myString.length; i++) {
			var charCode = myString.charCodeAt(i);

			if (!(charCode > 47 && charCode < 58)) {
				return false;
			}
		}
		return true;
	}

	// This gets called after successfully completing the CAPTCHA.
	function recaptchaCheck() {
		setCheckedCaptcha(true);
	}

	// Perform if statement checks against the requirements and update the button if errors occur or the user forgot something.
	function buttonRender() {
		var buttonTitle = "";
		var buttonDisabled = false;
		if (checkedTermsAndConditions && checkedCaptcha && !containsError) {
			buttonTitle = "Submit";
			buttonDisabled = false;
		} else if (!checkedTermsAndConditions && checkedCaptcha && !containsError) {
			buttonTitle = "Please accept the terms and conditions";
			buttonDisabled = true;
		} else if (checkedTermsAndConditions && !checkedCaptcha && !containsError) {
			buttonTitle = "Please accept the captcha";
			buttonDisabled = true;
		} else if (containsError) {
			buttonTitle = "Please resolve all errors";
			buttonDisabled = true;
		} else {
			buttonTitle = "Please accept the terms and conditions and Captcha";
			buttonDisabled = true;
		}

		if (buttonDisabled) {
			return (
				<Button type="submit" disabled variant="contained" color="secondary">
					{buttonTitle}
				</Button>
			);
		} else {
			return (
				<Button type="submit" variant="contained" color="secondary">
					{buttonTitle}
				</Button>
			);
		}
	}

	// This gets called after clicking on the button to submit the form
	function submitSurveyForm() {
		// Save data to sessioStorage to account for page refresh to save user's work. Will be cleared when browser/window/tab is closed.
		sessionStorage.setItem("userData", JSON.stringify(data));

		// Now send page information to Results Page.
		props.history.push({
			pathname: "/results",
			state: {
				data
			}
		});
	}

	return (
		<>
			<Header title={"CSC 642 Summer 2020 Individual Assignment - Steve Tu"} />
			<Card className={classes.root}>
				<CardHeader title="Data Survey Form" />
				<hr style={{ maxWidth: "95%" }}></hr>
				<CardContent>
					<form onSubmit={(e) => submitSurveyForm(e)}>
						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
							<Grid item xs={6} sm={3}>
								{checkedValidationNameError ? (
									<TextField
										error
										helperText="Full name cannot be more than 40 characters"
										id="first-name-textfield"
										label="First Name"
										type="text"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
										variant="filled"
									/>
								) : (
									<TextField id="first-name-textfield" label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required variant="filled" />
								)}
							</Grid>
							<Grid item xs={6} sm={3}>
								{checkedValidationNameError ? (
									<TextField
										error
										helperText="Full name cannot be more than 40 characters"
										id="last-name-textfield"
										label="Last Name"
										type="text"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										required
										variant="filled"
									/>
								) : (
									<TextField id="last-name-textfield" label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required variant="filled" />
								)}
							</Grid>
							<Grid item xs={6} sm={3}>
								<TextField
									id="birthday-textfield"
									label="Birthday"
									type="date"
									value={birthday}
									onChange={(e) => setBirthday(e.target.value)}
									required
									variant="filled"
									className={classes.textField}
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={6} sm={3}>
								<TextField
									id="height-ft-textfield"
									label="Height (optional)"
									type="number"
									value={heightFT}
									onChange={(e) => setHeightFT(e.target.value)}
									InputLabelProps={{ shrink: true }}
									InputProps={{
										inputProps: { min: 0 },
										shrink: "false",
										endAdornment: <InputAdornment position="end">ft</InputAdornment>
									}}
									variant="filled"
								/>
							</Grid>
							<Grid item xs={6} sm={3}>
								<TextField
									id="height-in-textfield"
									label="Height (optional)"
									type="number"
									value={heightIN}
									onChange={(e) => setHeightIN(e.target.value)}
									InputLabelProps={{ shrink: true }}
									InputProps={{
										inputProps: { min: 0 },
										shrink: "false",
										endAdornment: <InputAdornment position="end">in</InputAdornment>
									}}
									variant="filled"
								/>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12} sm={6}>
								<MuiPhoneNumber
									value={phone}
									label="Phone Number"
									onChange={(value) => {
										setPhone(value);
									}}
									required
									variant="filled"
								/>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={6} sm={3}>
								<FormControl component="fieldset">
									<FormLabel component="legend">Education Level (optional)</FormLabel>
									<RadioGroup aria-label="education-level" name="education-level1" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
										<FormControlLabel value="None" control={<Radio />} label="None" />
										<FormControlLabel value="High School" control={<Radio />} label="High School" />
										<FormControlLabel value="College" control={<Radio />} label="College" />
										<FormControlLabel value="Graduate Studies" control={<Radio />} label="Graduate Studies" />
										<FormControlLabel value="Ph.D" control={<Radio />} label="Ph.D" />
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								{checkedAddressError ? (
									<TextField
										error
										helperText={addressErrorText}
										id="street-address-textfield"
										label="Street Address"
										value={streetAddress}
										onChange={(e) => setStreetAddress(e.target.value)}
										required
										variant="filled"
										style={{ width: "80%" }}
									/>
								) : (
									<TextField
										id="street-address-textfield"
										label="Street Address"
										value={streetAddress}
										onChange={(e) => setStreetAddress(e.target.value)}
										required
										variant="filled"
										style={{ width: "80%" }}
									/>
								)}
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								<TextField
									id="street-address-extra-textfield"
									label="Apartment, unit, etc. (optional)"
									value={streetAddressExtra}
									onChange={(e) => setStreetAddressExtra(e.target.value)}
									variant="filled"
									style={{ width: "80%" }}
								/>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={6} sm={3}>
								{checkedZipCodeError ? (
									<TextField error helperText={zipCodeErrorText} id="zip-code-textfield" label="ZIP Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required variant="filled" />
								) : (
									<TextField id="zip-code-textfield" label="ZIP Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required variant="filled" />
								)}
							</Grid>
							<Grid item xs={6} sm={3}>
								<TextField id="city-textfield" label="City" value={city} onChange={(e) => setCity(e.target.value)} required variant="filled" />
							</Grid>
							<Grid item xs={6} sm={3}>
								<TextField
									id="textfield-select-state"
									label="State"
									select
									defaultValue=""
									value={state}
									onChange={(e) => setState(e.target.value)}
									required
									variant="filled"
									style={{ width: "100px" }}
								>
									{listOfStates.map((state, index) => {
										return (
											<MenuItem key={state + "-" + index} value={state}>
												{state}
											</MenuItem>
										);
									})}
								</TextField>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								{checkedEmailError ? (
									<TextField
										error
										helperText={emailErrorText}
										id="email-address-textfield"
										label="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										variant="filled"
										style={{ width: "80%" }}
									/>
								) : (
									<TextField id="email-address-textfield" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required variant="filled" style={{ width: "80%" }} />
								)}
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								{checkedConfirmEmailError ? (
									<TextField
										error
										helperText={confirmEmailErrorText}
										id="email-address-confirm-textfield"
										label="Confirm Email Address"
										value={confirmEmail}
										onChange={(e) => setConfirmEmail(e.target.value)}
										required
										variant="filled"
										style={{ width: "80%" }}
									/>
								) : (
									<TextField
										id="email-address-confirm-textfield"
										label="Confirm Email Address"
										value={confirmEmail}
										onChange={(e) => setConfirmEmail(e.target.value)}
										required
										variant="filled"
										style={{ width: "80%" }}
									/>
								)}
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								<ReCAPTCHA sitekey="6LcKB7EZAAAAAOnfPRTQWnXMcjhq4AV_hhhsisw_" onChange={recaptchaCheck} />
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								<FormControl>
									<FormControlLabel
										control={<Checkbox name="terms" checked={checkedTermsAndConditions} onChange={(e) => setCheckedTermsAndConditions(e.target.checked)} required />}
										label="I accept the Terms and Conditions"
									/>
								</FormControl>
							</Grid>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
							<Grid item xs={12}>
								{buttonRender()}
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</>
	);
}

export default Survey;
