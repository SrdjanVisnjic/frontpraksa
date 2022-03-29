import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "../axios"
import CardPostList from "../components/CardPostList"
import CardUserProfile from "../components/CardUserProfile"

const Profile = ()=> {
   
    const[user,setUser] = useState({})
    let {userid} = useParams()
    
    useEffect(()=>{
        const url = '/user/'+userid
        axios.get(url).then(res => setUser(res.data))
    },[setUser])

    return(
        <Box>
        <CardUserProfile user={user}/>

        <CardPostList userId={user.id}/>
        </Box>
    );
}
export default Profile;