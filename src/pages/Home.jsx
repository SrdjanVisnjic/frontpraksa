import { Grid, Paper } from "@mui/material";
import CardPostList from "../components/CardPostList";
import NewPost from "../components/NewPost";

const Home = () => {
    return (
        <Paper elevation={3}>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            row-spacing={2}
        >

            <NewPost />


            <CardPostList />

        </Grid>
        </Paper>
    )
}
export default Home;