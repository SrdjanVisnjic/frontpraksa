import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";



const CardUserProfile = ({ user }) => {
    return (
        <div>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Card sx={{  width: '100ch' }}>
                        <CardHeader
                            avatar={
                                <Avatar src='C:\Users\Srdjan\SocialNetwork\social_network\public\images\{user.profilePicture}'></Avatar>
                            }
                            title={"@" + user.username + "(" + user.name + " " + user.lastname + ")"}
                        />
                        <CardContent>
                        <Typography sx={{ mb: 1.5, mx: 1.5 }} >
                                Email:{user.email}
                            </Typography>
                        <Typography sx={{ mb: 1.5, mx: 1.5 }} >
                                Birthday:{user.dateOfBirth}
                            </Typography>
                        <Typography sx={{ mb: 1.5, mx: 1.5 }} >
                                About:{user.about}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </div>
    );
}

export default CardUserProfile;