import { Avatar, Card, CardActions, CardHeader, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from "../axios";

const FriendRequest = ({ request }) => {

    const handleAccept=(event)=>{
        var str = '/friend/accept/'+request.id
        axios.patch(str).then(res => console.log(res.data))
    }
    const handleReject=(event)=>{
        var str = '/friend/reject/'+request.id
        axios.delete(str).then(res => console.log(res.data))
    }

    return (
        <div>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar = {
                                    <Avatar src='C:\Users\Srdjan\SocialNetwork\social_network\public\images\${request.profilePicture}'>{request.name}</Avatar>
                                }
                                title={"@" + request.username + "(" + request.name + " " + request.lastname + ")"}
                            />
                            <CardActions>
                                <IconButton>
                                    <AddIcon fontSize = "large" onClick={handleAccept}></AddIcon>
                                    <RemoveCircleIcon fontSize = "large" onClick={handleReject}></RemoveCircleIcon>
                                </IconButton>
                            </CardActions>
                        </Card>
                </Grid>
            </Box>
        </div>
    );
}
export default FriendRequest;