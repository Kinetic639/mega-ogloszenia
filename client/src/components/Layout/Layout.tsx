import React from "react";
import {SearchAppBar} from "../AppBar/AppBar";
import {Map} from "../Map/Map";

import './Layout.scss'

export const Layout = () => {
    return (
        <div className='wrapper'>
            <SearchAppBar/>
            <Map/>
        </div>
    )

}
