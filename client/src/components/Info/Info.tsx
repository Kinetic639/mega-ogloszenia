import React from "react";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

export const Info = () => {
    return (
        <Grid container spacing={3}
              sx={{width: '100%', maxWidth: '700px', margin: '0 auto', padding: '20px 15px 20px 0'}}>
            <Grid item xs={12}>
                <Typography variant="h4" color='primary'>Informacje:</Typography>
            </Grid>
            <Grid item xs={12}><Typography variant="subtitle1" color='primary'>Czasami Adblock blokuje pokazywanie
                pinezek na mapie, najlepiej go wyłączyć.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" color='primary'>Na chwilę obecną nie ma walidacji adresu
                    (jest to w planach), dlatego proszę o podawanie adresu w formacie podanym w podpowiedziach pod
                    polami formularza</Typography>
            </Grid>

        </Grid>
    )
}
