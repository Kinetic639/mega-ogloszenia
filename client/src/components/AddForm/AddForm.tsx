import React, {SyntheticEvent, useEffect, useState} from "react";
import {FormControl, FormHelperText, Grid, TextField} from '@mui/material';

import './AddForm.scss'
import {geoCode} from "../../utils/geoCoding";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {motion} from "framer-motion";
import {FadeInUpVariants} from "../../utils/motionUtils";
import {apiUrl} from "../../config/api";

export const AddForm = () => {
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    const [address, setAddress] = useState({
        street: '',
        postCode: '',
        city: '',
    })
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    })

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true)

        try {

            const {lat, lon} = await geoCode(form.address);

            const res = await fetch(`${apiUrl}/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false)
        }
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }
    const updateAddress = async (key: string, value: any) => {
        setAddress(form => ({
            ...form,
            [key]: value,
        }))


    }
    useEffect(() => {
        updateForm('address', Object.values(address).join(', '))
    }, [address]);


    if (loading) {
        return <Typography variant="h5" sx={{padding: '20px'}} color="primary">Trwa dodawanie
            ogłoszenia...</Typography>
    }
    if (id) {
        return <Typography variant="h5" sx={{padding: '20px'}} color="primary">Twoje ogłoszenie {form.name} zostało
            poprawnie dodane do
            serwisu!</Typography>
    }


    return (
        <FormControl
            sx={{width: '100%', padding: '20px 0'}}>
            <form action="" className="add-form" onSubmit={saveAd}>

                <Grid
                    component={motion.div}
                    variants={FadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    container spacing={4}>
                    <Grid
                        component={motion.div}
                        item xs={12}>

                        <Typography variant="h4" color="primary">Dodaj Ogłoszenie</Typography>
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>

                        <TextField label="Nazwa" variant='outlined' onChange={e => updateForm('name', e.target.value)}
                                   size='small' color='primary' inputProps={{maxLength: 99}}
                                   required fullWidth/>
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>

                        <TextField label="Opis" variant='outlined'
                                   onChange={e => updateForm('description', e.target.value)}
                                   size='small' multiline color='primary' minRows={4} maxRows={100}
                                   inputProps={{maxLength: 999}} required
                                   fullWidth
                                   value={form.description}
                        />
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>
                        <TextField
                            label="Cena"
                            type="number"
                            required
                            sx={{width: '120px'}}
                            value={form.price}
                            onChange={e => updateForm('price', Number(e.target.value))}
                        />
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>

                        <TextField
                            label="Link do ogłoszenia"
                            variant='outlined'
                            onChange={e => updateForm('url', e.target.value)}
                            size='small'
                            color='primary'
                            inputProps={{maxLength: 99}}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="primary">Adres</Typography>
                            </Grid>
                            <Grid item xs={12}>

                                <TextField label="Ulica i numer" variant='outlined'
                                           onChange={e => updateAddress('street', e.target.value)}
                                           size='small'
                                           color='primary'
                                           inputProps={{maxLength: 99}}
                                           required
                                           fullWidth
                                           aria-describedby="street-description-helper"
                                />
                                <FormHelperText id="street-description-helper">Ulica i nr domu, bez "Ul." na początku
                                    (np: Kowalskiego 1)</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Kod Pocztowy" variant='outlined'
                                           fullWidth
                                           onChange={e => updateAddress('postCode', e.target.value)}
                                           size='small'
                                           color='primary'
                                           inputProps={{maxLength: 99}}
                                           required
                                           aria-describedby="post-code-helper"

                                />
                                <FormHelperText id="post-code-helper">format kodu: (00-000)</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField label="Miejscowość" variant='outlined'
                                           onChange={e => updateAddress('city', e.target.value)}
                                           size='small'
                                           color='primary'
                                           inputProps={{maxLength: 99}}
                                           required
                                           fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        component={motion.div}
                        variants={FadeInUpVariants}
                        item xs={12}>
                        <Button type='submit' variant='contained' sx={{width: '100%', padding: '10px 0'}}
                                startIcon={<AddCircleIcon/>}>Dodaj
                            Ogłoszenie</Button>
                    </Grid>
                </Grid>
            </form>
        </FormControl>
    )

}
