import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {CustomButton} from "../common/CustomButton/CustomButton";
import {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../context/search-context";
import {NavLink} from "react-router-dom";
import HelpIcon from '@mui/icons-material/Help';
import MapIcon from '@mui/icons-material/Map';

import "./Appbar.scss"

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const SearchAppBar = () => {

    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search)

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault()
        setSearch(inputVal)
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <NavLink className="link link__nav" to='/'>
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <MapIcon/>
                    </IconButton>
                    <p>Mapa</p>
                </MenuItem>
            </NavLink>
            <NavLink className="link link__nav" to='/add'>
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <PostAddIcon/>
                    </IconButton>
                    <p>Dodaj ogłoszenie</p>
                </MenuItem>
            </NavLink>
            <NavLink className="link link__nav" to='/info'>
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <HelpIcon/>
                    </IconButton>
                    <p>Informacje</p>
                </MenuItem>
            </NavLink>

        </Menu>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink className="link link__logo" to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}}}
                        >
                            <strong>Mega</strong> Ogłoszenia
                        </Typography>
                    </NavLink>
                    <Box sx={{flexGrow: 1}}/>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <form onSubmit={setSearchFromLocalState}>
                            <StyledInputBase
                                placeholder="Szukaj Ogłoszeń…"
                                inputProps={{'aria-label': 'search'}}
                                value={inputVal}
                                onChange={e => setInputVal(e.target.value)}
                            />
                        </form>
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <NavLink className="link link__nav" to="/info">
                            <CustomButton
                                variant='text'
                                startIcon={<HelpIcon/>}
                                content=''
                                color='secondary'/>
                        </NavLink>

                        <NavLink className="link link__nav" to="/add">
                            <CustomButton startIcon={<PostAddIcon/>}
                                          content='Dodaj Ogłoszenie'
                                          color='secondary'/>
                        </NavLink>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
