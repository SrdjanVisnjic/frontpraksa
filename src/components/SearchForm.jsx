import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "../axios";
import CardUserList from "./CardUserList";

const SearchForm = () => {

    const[keyword,setKeywords]=useState({
        name: '',
        lastname:''
    })
    const[users,setUsers]=useState([])

    const onChange=(event)=>{
        const value = event.target.value
        setKeywords({
            ...keyword,
            [event.target.name]: value
        })
    }

    const handleSubmit = (event)=>{
        const url = '/user/search/' + keyword.name + '/' + keyword.lastname
        axios.get(url).then(res => setUsers(res.data)).then(console.log(users))
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Search users
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
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >Search</Button>
                    </Grid>
                </Box>
                <CardUserList users={users}/>
            </Box>
        </Container>
    )
}

export default SearchForm;