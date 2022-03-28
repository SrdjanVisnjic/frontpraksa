import { useState, useEffect } from "react";
import CardPost from "./CardPost";
import axios from "../axios";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CardPostList = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/post/allPostsByUser/3')
    .then(res => setPosts(res.data));
  }, [setPosts])

  posts.map(post => console.log(post.name));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.15),
    color: theme.palette.text.secondary,
    minWidth: 375,
  }));

  return (
      <Grid  
        container
        justifyContent="center"
        alignItems="center">
          <Stack>
            {posts.map(post => <Item><CardPost key={post.postId} post={post}/> </Item>)}
          </Stack>
      </Grid>
  );
}

export default CardPostList;