import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from '../axios';

const EditUserInfo = () => {


    const [userDTO, setUser] = useState({
        username: '',
        email: '',
        name: '',
        lastname: '',
        dateOfBirth: '',
        about: ''
    })

    useEffect(() => {
        axios.get('/user/3')
            .then(res => setUser({
                username: res.data.username,
                email: res.data.email,
                name: res.data.name,
                lastname: res.data.lastname,
                dateOfBirth: res.data.dateOfBirth,
                about: res.data.about
            })).then(console.log(userDTO));
    }, [setUser])

    const onChange = (event) => {
        const value = event.target.value;
        setUser({
            ...userDTO,
            [event.target.name]: value
        })
    }

    const handleSubmit = (event) => {
        var str = '/user/update/3'
        axios.patch(str, userDTO)
    }



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
                    Edit profile
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="username"
                                label="Username"
                                id="username"
                                multiline
                                value={userDTO.username}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                multiline
                                value={userDTO.email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                fullWidth
                                multiline
                                id="firstName"
                                value={userDTO.name}
                                label="First Name"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="lastname"
                                label="Last Name"
                                name="lastname"
                                multiline
                                value={userDTO.lastname}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="about"
                                label="About"
                                placeholder="About...."
                                name="about"
                                value={userDTO.about}
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
                        Update
                    </Button>
                </Box>
            </Box>
        </Container>
    )

}
export default EditUserInfo;