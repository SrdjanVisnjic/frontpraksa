import { Avatar, Card, CardActions, CardHeader, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";


const CardUser = ({ user }) => {
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
                                <Avatar src='C:\Users\Srdjan\SocialNetwork\social_network\public\images\{user.profilePicture}'></Avatar>
                            }
                            title={"@" + user.username + "(" + user.name + " " + user.lastname + ")"}
                            action={
                            <Link to ={{
                                pathname: "/profile/${user.id}",
                                userid: user.id,
                            }}>
                            <IconButton>
                                <AccountBoxIcon fontSize="large" />
                            </IconButton>
                            </Link>
                             } />
                    </Card>
                </Grid>
            </Box>
        </div>
    );
}

export default CardUser;