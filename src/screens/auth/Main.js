import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignLog, Login, Otp, GenderSelect, TypesOfConnection, Interest, Profile, Location, Notifications } from "./index";

const Main = () => {

    return (
        <Routes>
            <Route path="/" exact element={<SignLog />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/otp" exact element={<Otp />} />
            <Route path="/gender_select" exact element={<GenderSelect />} />
            <Route path="/types_of_connection" exact element={<TypesOfConnection />} />
            <Route path="/interest" exact element={<Interest />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/location" exact element={<Location />} />
            <Route path="/notifications" exact element={<Notifications />} />
        </Routes>
    )
}

export default Main
