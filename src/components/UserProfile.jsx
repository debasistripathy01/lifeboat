

import React, {useContext, useEffect} from "react";

import { Outlet, useParams } from "react-router-dom";
import { UserContext } from "../Redux/userContext";
import { GET_SINGLE_USERS } from "../Redux/action";

const UserProfile = ()=>{

    const { id } = useParams();

    const { state: { singleUserData}, dispatch} = useContext(UserContext);

    useEffect(()=>{
        dispatch(GET_SINGLE_USERS)
    })

}

export default UserProfile;