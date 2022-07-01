import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Box from "@mui/material/Box";
import '../../utils/fix-map-icons'

import 'leaflet/dist/leaflet.css';
import './Map.scss'
import {SearchContext} from "../../context/search-context";
import {SimpleAdEntity} from "types";
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`)
            const data = await res.json()

            setAds(data)
        })()
    }, [search])

    return (
        <Box sx={{height: {xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)'}}} className='map'>
            <MapContainer center={[52.4347477, 16.9233696]} zoom={16}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    )
}
