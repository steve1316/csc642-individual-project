import React, { useState } from "react";
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

function Survey() {
  const classes = useStyles();

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

  function recaptchaCheck(value) {
    console.log("Captcha value: ", value);
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Data Survey for Students" />
      <CardContent>
        <form>
          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
            <Grid item xs={6} sm={3}>
              <TextField id="outlined-basic" label="First Name" required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="outlined-basic" label="Last Name" required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
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
                id="outlined-basic"
                type="number"
                label="Height (optional)"
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { min: 0 }, shrink: false, endAdornment: <InputAdornment position="end">ft</InputAdornment> }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                id="outlined-basic"
                type="number"
                label="Height (optional)"
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { min: 0 }, shrink: false, endAdornment: <InputAdornment position="end">in</InputAdornment> }}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Street Address" required variant="outlined" style={{ width: "80%" }} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Apartment, suite, unit, building, floor, etc. (optional)" variant="outlined" style={{ width: "80%" }} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={6} sm={3}>
              <TextField id="outlined-basic" label="ZIP Code" required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="outlined-basic" label="City" required variant="outlined" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField id="textfield-select-state" select required label="State" helperText="Please select your state">
                {listOfStates.map((state) => {
                  return <MenuItem value={state}>{state}</MenuItem>;
                })}
              </TextField>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Email Address" required variant="outlined" style={{ width: "80%" }} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Confirm Email Address" required variant="outlined" style={{ width: "80%" }} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <ReCAPTCHA sitekey="6LcKB7EZAAAAAOnfPRTQWnXMcjhq4AV_hhhsisw_" onChange={recaptchaCheck} />
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <FormControl required>
                <FormControlLabel control={<Checkbox name="terms" />} label="I accept the Terms and Conditions *" />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} style={{ paddingTop: 10 }}>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default Survey;
