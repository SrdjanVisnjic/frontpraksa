import { CardActions, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorder } from '@mui/icons-material';
import axios from '../axios';
import { useState } from 'react';


const CardPost = ({ post }) => {

    const[liked,setLike] = useState(post.liked)
    const[numLikes,setNumLikes] = useState(post.likeCount)

    const handleDislike = ()=>{
        setLike(false)
        setNumLikes(numLikes -1)
        var str = '/likes/unlike/3/'+post.postId
        axios.delete(str)
    }

    const handleLike = ()=>{
        setLike(true)
        setNumLikes(numLikes +1)
        var str = '/likes/like/3/'+post.postId
        axios.post(str)
    }

    return (
        <div>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Card sx={{ width: '100ch' }}>
                        <CardHeader
                            title={"@" + post.username + "(" + post.name + " " + post.lastname + ")"}
                            subheader={post.createdAt} />
                        <CardContent>
                            <Typography sx={{ mb: 1.5, mx: 1.5 }} >
                                {post.message}
                            </Typography>
                            <CardActions disableSpacing>
                                <IconButton aria-label="like">
                                    {liked ? <FavoriteIcon onClick = {handleDislike}/> : <FavoriteBorder onClick={handleLike}/>}
                                </IconButton>
                                <Typography>
                                    {numLikes}
                                </Typography>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </div>
    )
}
export default CardPost;