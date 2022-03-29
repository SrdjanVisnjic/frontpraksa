import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import EditUserInfo from "../components/EditUserInfo";
import UploadProfilePicture from "../components/UploadProfilePicture";

const MyAccount = () => {
    return (
        <Box
        sx={{
            margin: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
       <Paper elevation={3}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
                direction = "row"
            >
                <Grid item>
                    <EditUserInfo />
                </Grid>
                <Grid item >
                    <UploadProfilePicture />
                </Grid>
            </Grid>
        </Paper>
        </Box>
    );
}
export default MyAccount;