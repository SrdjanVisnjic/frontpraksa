import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from '../axios';

const NewPost = () => {
    
    const onChange =(event)=>{

    }

    const handleClick = () =>{
        axios.post('/user', {
            id: 0,
            userId: 3,
            message: {}
          })
    }

    return(
        <Box 
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off">
                <TextField
                    id="newpost"
                    label="New Post"
                    placeholder="Typing...."
                    multiline
                    onChange= {onChange}
                />
                <Button variant="text" onClick={handleClick}>Text</Button>
        </Box>
    )
}
export default NewPost;
