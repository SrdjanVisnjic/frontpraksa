import { Button } from "@mui/material";
import { useState } from "react";
import axios from '../axios';


function Test({name, lastname}){
    const [test,setTest] = useState({})
    const handleClick = () =>{
        axios.get('/user/1').then(res => setTest(res.data))
    }
    return( 
        <>
            <div>Test {name} {lastname}</div>
            <h1>{test.username}</h1>
            <Button variant="text" onClick={handleClick}>Text</Button>
        </>
    )
}
export default Test;