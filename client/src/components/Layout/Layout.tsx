import React from "react";
import {SearchAppBar} from "../AppBar/AppBar";
import {Map} from "../Map/Map";

import './Layout.scss'
import {Routes, Route, useLocation} from "react-router-dom";
import {AddForm} from "../AddForm/AddForm";
import {AnimatePresence} from "framer-motion";
import {Info} from "../Info/Info";

export const Layout = () => {
    const location = useLocation()
    return (
        <div className='wrapper'>
            <SearchAppBar/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path={"/"} element={<Map/>}/>
                    <Route path={"/add"} element={<AddForm/>}/>
                    <Route path={"/info"} element={<Info/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    )
}
