import React, {useEffect, useState} from "react";
import {AdEntity} from "types";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

interface Props {
    id: string
}

export const SingleAd = ({id}: Props) => {

    const [ad, setAd] = useState<AdEntity | null>(null)
    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/ad/${id}`)
            const data = await res.json()

            setAd(data)
        })()
    }, [])

    if (ad === null) {
        return <p>Wczytywanie...</p>
    }

    return (
        <Box component='div'>
            <Typography variant="h6" color='primary'>{ad.name}</Typography>
            <Typography variant="subtitle2" color='primary'>{ad.description}</Typography>
            {!!ad.price && <p><b>{ad.price} zł</b></p>}
            <hr/>
            <Link underline='hover' color='secondary' href={`https://${ad.url}`} target={"_blank"}
                  rel="noreferrer">Otwórz
                ogłoszenie</Link>

        </Box>
    )
}


