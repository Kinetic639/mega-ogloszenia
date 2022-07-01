import React from "react";
import {SearchAppBar} from "../AppBar/AppBar";
import {Map} from "../Map/Map";

import './Layout.scss'
import {Routes, Route} from "react-router-dom";
import {AddForm} from "../AddForm/AddForm";

export const Layout = () => {
    return (
        <div className='wrapper'>
            <SearchAppBar/>
            <Routes>
                <Route path={"/"} element={<Map/>}/>
                <Route path={"/add"} element={<AddForm/>}/>
            </Routes>
        </div>
    )

}
