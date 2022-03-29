import { styled } from '@mui/material/styles';
import { Grid, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react"
import axios from "../axios";
import FriendRequest from "./FriendRequest";

const FriendRequestList = () => {
    
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axios.get('/friend/getFriendRequests/3')
        .then(res => setRequests(res.data));
      }, [setRequests])


      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.15),
        color: theme.palette.text.secondary,
        minWidth: 375,
      }));

    return(
        <Grid  
        container
        justifyContent="center"
        alignItems="center">
          <Stack>
            {requests.map(request => <Item><FriendRequest key={request.id} request={request}/> </Item>)}
          </Stack>
      </Grid>
    );  
}

export default FriendRequestList;