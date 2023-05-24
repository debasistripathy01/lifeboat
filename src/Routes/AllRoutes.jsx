import React from "react";
import { Routes, Route } from "react-router-dom"

const AllRoutes = ()=>{

    return (
        <Routes>
            <Route path="/" />
            <Route path="/:id"/>
            <Route path="posts"/>
            <Route path="gallery"/>
            <Route path="todo"/>
        </Routes>
    )
}