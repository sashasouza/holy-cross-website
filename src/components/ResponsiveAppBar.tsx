'use client';
import * as React from 'react';
import Image from 'next/image';
import { Drawer, Container, Grid2 as Grid, IconButton, Button, Box } from '@mui/material';
import MenuSharp from '@mui/icons-material/MenuSharp';

import Logo from '../assets/logo.png';

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const menuItems = [
        { label: 'About Us', href: 'AboutUs' },
        { label: 'Car Rental', href: 'CarRental' },
        { label: 'Contact Us', href: 'ContactUs' },
    ];

    return (
        <>
            <Container id="PageTop">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        my: {
                            xs: 3,
                            sm: 5,
                        },
                    }}
                >
                    <Grid sx={{ height: { xs: 50, sm: 80 } }} size="auto">
                        <img
                            src={Logo.src}
                            alt="LOGO"
                            sizes="100vw"
                            style={{
                                width: 'auto',
                                height: '100%',
                            }}
                        />
                    </Grid>
                    <Grid container alignItems="center" justifyContent={{ xs: 'flex-end', md: 'center' }} sx={{ height: { xs: 50, sm: 80 } }} size="auto">
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {menuItems.map((item) => (
                                <Button key={item.label} variant="text" color="primary" sx={{ color: 'text.primary', fontWeight: '300' }} onClick={() => {
                                    document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                        <Grid size="auto" sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton
                                aria-label="menu"
                                onClick={() => {
                                    setMenuOpen(true);
                                }}
                            >
                                <MenuSharp sx={{ fontSize: 50 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Drawer
                anchor='right'
                sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
                open={menuOpen}
                onClick={() => {
                    setMenuOpen(false);
                }}
            >
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'primary.main' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <Button onClick={() => {
                                document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })
                            }} key={item.label} variant="text" sx={{
                                color: 'primary.contrastText',
                                '&:hover': {
                                    backgroundColor: 'primary.dark'
                                },
                            }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Container>
            </Drawer >
        </>
    );
}