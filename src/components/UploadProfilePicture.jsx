import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Box, Container, IconButton, Input } from "@mui/material";
import { useEffect, useState } from "react";
import axios from '../axios';

const UploadProfilePicture = () => {

    const [profilePicture, setProfilePicture] = useState({
        profilePicture: ''
    })

    useEffect(()=>{
    axios.get('/user/3')
    .then(res => setProfilePicture(
        {profilePicture : res.data.profilePicture})
        )},[setProfilePicture])

    const handleChange=(event)=>{
        const value = event.target.files[0]
        setProfilePicture({
            profilePicture: value
        })
    }
    const handleClick=()=>{
        const formData = new FormData();
        formData.append('profilePicture', profilePicture)
        const config = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('/user/updatePfp/3', formData, config)
    }
    return (
        <Box sx={{
            width: 500,
            height: 500
        }}>
            <Avatar src='C:\Users\Srdjan\SocialNetwork\social_network\public\images\${user.profilePicture}' />
            <Input accept="image/*" id="icon-button-file" type="file" onChange={handleChange}/>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick}>
                <PhotoCamera />
            </IconButton>
        </Box >
    );
}
export default UploadProfilePicture;