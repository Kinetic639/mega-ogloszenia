import React, {useState} from 'react';
import {Layout} from "./components/Layout/Layout";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {orange, teal} from '@mui/material/colors';
import {SearchContext} from "./context/search-context";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        primary: teal,
        secondary: {
            main: '#b2dfdb',
        },
    },
});

export const App = () => {
    const [search, setSearch] = useState('')
    return (
        <ThemeProvider theme={theme}>
            <SearchContext.Provider value={{search, setSearch}}>
                <Layout/>
            </SearchContext.Provider>
        </ThemeProvider>
    )
}

