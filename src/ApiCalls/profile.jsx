import { useEffect } from "react"
import { profiles } from "../api"
import { useState } from "react"
import UserData from "./userData"
const Profile = () =>{
    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        profiles().then((user)=>setUserData(user.results[0]))

    },[])
    
    return(
        <>
        {userData && <UserData data={userData}/>}
        <button onClick={()=>{profiles().then((user)=>setUserData(user.results[0]))}}>refresh data</button>
        </>
    )
}

export default Profile