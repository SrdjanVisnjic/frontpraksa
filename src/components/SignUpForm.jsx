import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import axios from '../axios';
import moment from 'moment';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const SignUpForm = () => {

  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    lastname: "",
    dateOfBirth: "",
    about: "",
  })
  const [value, setValue] = useState(new Date('2000-01-01T21:11:54'));

  const onChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    })

  }
  const handleChange = (newValue) => {
    setValue(newValue)
    setState({
      ...state,
      dateOfBirth: newValue
    })
  };

  const handleSubmit = (event) => {
    var date = moment(state.dateOfBirth).format('YYYY-mm-DD HH:mm:ss')
    setState({
      ...state,
      dateOfBirth: date
    })
    axios.post('/user/register', {
      id: 0,
      username: state.username,
      password: state.password,
      email: state.email,
      name: state.name,
      lastname: state.lastname,
      dateOfBirth: state.dateOfBirth,
      about: state.about,
      profilePicture: "default.jpg"
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="family-name"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Birthday"
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  name = "dateOfBirth"
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="about"
                label="About"
                placeholder="About...."
                name="about"
                multiline
                fullWidth
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Have an account? Log in!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default SignUpForm;