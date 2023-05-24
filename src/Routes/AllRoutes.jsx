import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import UserProfile from "../components/UserProfile";

const AllRoutes = ()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<UserProfile />}/>
            <Route path="posts"/>
            <Route path="gallery"/>
            <Route path="todo"/>
        </Routes>
    )
}