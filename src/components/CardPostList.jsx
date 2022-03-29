import { useState, useEffect } from "react";
import CardPost from "./CardPost";
import axios from "../axios";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const CardPostList = ({ userid }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/post/allPostsByUser/3')
      .then(res => setPosts(res.data));
  }, [setPosts])

  posts.map(post => console.log(post.name));

  const handleClick=(event)=>{
    const req = {
      id: 0,
      sourceId: 3,
      targetId: userid,
      createdAt: "0000-00-00",
      status: 0
    }
    axios.post('/friend/create/', req)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.15),
    color: theme.palette.text.secondary,
    minWidth: 375,
  }));
  if (userid !== undefined || userid != null) {
    if(posts.filter(post => post.userId === userid).length > 0){
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center">
        <Stack>
          {posts.filter(post => post.userId === userid).map(post => <Item><CardPost key={post.postId} post={post} /> </Item>)}
        </Stack>
      </Grid>
    );}else{
      return(
        <Grid
        container
        justifyContent="center"
        alignItems="center">
          <Button variant="contained" onClick={handleClick}>Add friend</Button>
        </Grid>
      )
    }
  }return (
    <Grid
      container
      justifyContent="center"
      alignItems="center">
      <Stack>
        {posts.map(post => <Item><CardPost key={post.postId} post={post} /> </Item>)}
      </Stack>
    </Grid>
  );
}

export default CardPostList;