import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import axios from '../axios';
import {useState} from 'react';
import moment from 'moment';

const NewPost = () => {
    
    const [state,setState] = useState({
        message: ""
    })

    const onChange =(event)=>{
        setState({ message: event.target.value})
    }

    const handleClick = () =>{
        var date = new Date()
        var dateStr = moment(date).format('YYYY-mm-DD HH:mm:ss')
        axios.post('/post/create', {
            id: 0,
            userId: 3,
            message: state.message,
            createdAt: dateStr,
            editedAt: dateStr
          }).then(res => {console.log(res)
                        console.log(res.data)})
    }

    return(
        <Box 
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                     >
                <TextField
                    id="newpost"
                    placeholder="New post..."
                    multiline
                    onChange= {onChange}
                />
                </Grid>
                <Grid  
                    container
                    justifyContent="right"
                    alignItems="right"
                    width ='168ch' 
                    display = 'flex'>
                <Button variant="contained" onClick={handleClick}>Post</Button>
                </Grid>
        </Box>
    )
}
export default NewPost;
