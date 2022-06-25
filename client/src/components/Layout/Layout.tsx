import React from "react";
import {SearchAppBar} from "../AppBar/AppBar";
import {Map} from "../Map/Map";

import './Layout.scss'
import {NowyBar} from "../nowyBar/nowyBar";

export const Layout = () => {
    return (
        <div className='wrapper'>
            <SearchAppBar/>
            <Map/>
        </div>
    )

}
