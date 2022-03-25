import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


const CardPost = ({post}) => {


    return(
        <div>
            <Card sx ={{width: '100ch'}}>
                
                <CardHeader
                title={"@"+post.username}
                subheader={post.createdAt}/>
                <Typography sx={{ mb: 1.5 , mx:1.5 }} variant ="body2" color="text.secondary">
                    {post.name} {post.lastname}
                </Typography>
                <Typography sx={{ mb: 1.5 , mx:1.5 }} variant="body2">
                    {post.message}
                </Typography>
                
            </Card>
        </div>
    )
}
export default CardPost;