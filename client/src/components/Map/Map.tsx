import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Box from "@mui/material/Box";
import '../../utils/fix-map-icons'

import 'leaflet/dist/leaflet.css';
import './Map.scss'
import {SearchContext} from "../../context/search-context";

export const Map = () => {
    const {search} = useContext(SearchContext)

    useEffect(() => {
        
    }, [search])

    return (
        <Box sx={{height: {xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)'}}} className='map'>
            <h1>text: {search}</h1>
            <MapContainer center={[52.4347477, 16.9233696]} zoom={16}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[52.43455, 16.92175]}>
                    <Popup>
                        <h2>Moja chata</h2>
                        <p>Widziana z mojej apki</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    )
}
