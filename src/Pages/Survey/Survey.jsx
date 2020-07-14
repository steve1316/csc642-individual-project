import React, { useState, useEffect } from "react";
import { Grid, CardHeader, Card, CardContent, TextField, makeStyles, InputAdornment, MenuItem, FormControl, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";

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

  const [heightFT, setHeightFT] = useState(0);
  const [heightIN, setHeightIN] = useState(0);

  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressExtra, setStreetAddressExtra] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [email, setEmail] = useState("");

  const [checkedTermsAndConditions, setCheckedTermsAndConditions] = useState(false);
  const [checkedCaptcha, setCheckedCaptcha] = useState(false);

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
      setStreetAddress(userData.streetAddress);
      setStreetAddressExtra(userData.streetAddressExtra);
      setZipCode(userData.zipCode);
      setCity(userData.city);
      setState(userData.state);
      setEmail(userData.email);
      setCheckedTermsAndConditions(false);
      setCheckedCaptcha(false);
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
    streetAddress: streetAddress,
    streetAddressExtra: streetAddressExtra,
    zipCode: zipCode,
    city: city,
    state: state,
    email: email,
    checkedTermsAndConditions: checkedTermsAndConditions,
    checkedCaptcha: checkedCaptcha
  };

  const listOfStates = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  // This gets called after successfully completing the CAPTCHA.
  function recaptchaCheck(value) {
    console.log("Captcha value: ", value);
    setCheckedCaptcha(true);
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
    <Card className={classes.root}>
      <CardHeader title="Data Survey for Students" />
      <CardContent>
        <form onSubmit={(e) => submitSurveyForm(e)}>
          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
            <Grid item xs={6} sm={3}>
              <TextField id="first-name-textfield" label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="last-name-textfield" label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="birthday-textfield"
                label="Birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
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
                InputProps={{ inputProps: { min: 0 }, shrink: "false", endAdornment: <InputAdornment position="end">ft</InputAdornment> }}
                variant="outlined"
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
                InputProps={{ inputProps: { min: 0 }, shrink: "false", endAdornment: <InputAdornment position="end">in</InputAdornment> }}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField
                id="street-address-textfield"
                label="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
                variant="outlined"
                style={{ width: "80%" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField
                id="street-address-extra-textfield"
                label="Apartment, suite, unit, building, floor, etc. (optional)"
                value={streetAddressExtra}
                onChange={(e) => setStreetAddressExtra(e.target.value)}
                variant="outlined"
                style={{ width: "80%" }}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={6} sm={3}>
              <TextField id="zip-code-textfield" label="ZIP Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="city-textfield" label="City" value={city} onChange={(e) => setCity(e.target.value)} required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="textfield-select-state" label="State" helperText="Please select your state" select defaultValue="" value={state} onChange={(e) => setState(e.target.value)} required>
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
              <TextField id="email-address-textfield" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required variant="outlined" style={{ width: "80%" }} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField id="email-address-confirm-textfield" label="Confirm Email Address" required variant="outlined" style={{ width: "80%" }} />
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
              {checkedTermsAndConditions ? (
                <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
              ) : checkedCaptcha ? (
                <Button disabled variant="contained" color="secondary">
                  Please accept the terms and conditions
                </Button>
              ) : (
                <Button disabled variant="contained" color="secondary">
                  Please accept the terms and conditions and Captcha
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default Survey;
