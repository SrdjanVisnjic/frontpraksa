import { Avatar, Card, CardActions, CardHeader, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from "../axios";

const FriendRequest = ({ request }) => {

    const handleAccept = (event) => {
        var str = '/friend/accept/' + request.id
        axios.patch(str).then(res => console.log(res.data))
    }
    const handleReject = (event) => {
        var str = '/friend/reject/' + request.id
        axios.delete(str).then(res => console.log(res.data))
    }

    return (
        <div>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Card sx={{ maxWidth: 345, width: '100ch' }}>
                        <CardHeader
                            avatar={
                                <Avatar src='C:\Users\Srdjan\SocialNetwork\social_network\public\images\${request.profilePicture}'>{request.name}</Avatar>
                            }
                            title={"@" + request.username + "(" + request.name + " " + request.lastname + ")"}
                        />
                        <CardActions disableSpacing>
                            <IconButton>
                                <AddIcon fontSize="large" onClick={handleAccept}></AddIcon>
                            </IconButton>
                            <IconButton>
                                <RemoveCircleIcon fontSize="large" onClick={handleReject}></RemoveCircleIcon>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Box>
        </div>
    );
}
export default FriendRequest;