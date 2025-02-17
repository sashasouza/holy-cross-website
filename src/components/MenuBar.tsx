'use client';
import * as React from 'react';
import Image from 'next/image';
import { Backdrop, Container, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import MenuSharp from '@mui/icons-material/MenuSharp';

import Logo from '../assets/logo.png';
import { paletteColors } from './constants';

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <Container>
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
                        <Image
                            src={Logo}
                            alt="LOGO"
                            sizes="100vw"
                            style={{
                                width: 'auto',
                                height: '100%',
                            }}
                        />
                    </Grid>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ height: { xs: 50, sm: 80 } }} size="auto">
                        {/* <Grid size="auto" sx={{ width: { xs: 150, sm: 200 } }}>
                            <Image
                                src={BookNow}
                                alt="Book now"
                                style={{
                                    width: '100%',
                                    maxWidth: '220px',
                                    height: 'auto',
                                    maxHeight: '40px',
                                }}
                            />
                        </Grid> */}
                        <Grid size="auto">
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
            <Backdrop
                sx={(theme) => ({ backgroundColor: paletteColors.blue, zIndex: theme.zIndex.drawer + 1 })}
                open={menuOpen}
                onClick={() => {
                    setMenuOpen(false);
                }}
            >
                <Typography color="primary">Content here</Typography>
            </Backdrop>
        </>
    );
}
