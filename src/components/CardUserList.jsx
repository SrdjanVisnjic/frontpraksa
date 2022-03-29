import CardUser from "./CardUser";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const CardUserList = ({users})=>{
    
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
                {users.map(user => <Item><CardUser key={user.id} user={user}/> </Item>)}
              </Stack>
          </Grid>
      );
}

export default CardUserList;