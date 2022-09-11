import React, { useEffect } from "react";
import Mainroutes from "../screens/auth/Main";
import Main from "../screens";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUserToken } from "../actions/auth"
import { Route , Routes } from 'react-router-dom';



const AppRouter = () => {

    let history = useNavigate()
    let dispatch = useDispatch()

    // let user_data = useSelector((state) => state.auth.user_data)

    let token = localStorage.getItem("token")


    const loadUserData = async () => {
        // dispatch(getUserData())
    }

    // useEffect(() => {
    //     if(token == ""){
    //         token = localStorage.getItem('token')
    //         if(!token || token == "" || token == undefined){
    //             history.push("/")
    //         } else {
    //             loadUserData()
    //         }
    //     }
    // }, [])

    return (
        <>
            {token ? <Main /> : <Mainroutes/>}
        </>
    );
}
export default AppRouter;