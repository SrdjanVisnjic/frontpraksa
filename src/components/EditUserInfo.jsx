import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import axios from '../axios';

const EditUserInfo = ({ user }) => {

    const [userDTO, setUser] = useState({
        username: user.username,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        dateOfBirth: user.dateOfBirth,
        about: user.about
    })

    const onChange = (event) => {
        const value = event.target.value;
        setUser({
            ...userDTO,
            [event.target.name]: value
        })
    }

    const handleSubmit = (event) =>{
        var str = '/user/update'+user.id
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
                                value={userDTO.email}
                                autoComplete="email"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                fullWidth
                                id="firstName"
                                value={userDTO.name}
                                label="First Name"
                                autoFocus
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="lastname"
                                label="Last Name"
                                name="lastname"
                                value={userDTO.lastname}
                                autoComplete="family-name"
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