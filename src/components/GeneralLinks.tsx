'use client';
import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function GeneralLinks() {

    const menuItems = [
        { label: 'Home', href: 'PageTop' },
        { label: 'About Us', href: 'AboutUs' },
        { label: 'Car Rental', href: 'CarRental' },
    ];
    return (
        <Grid2 id="GeneralLinks" sx={{
            width: "100%",
            px: { sm: '0.5em', md: '1em' }
        }}>
            <Typography
                variant='h5'
                fontWeight={'fontWeightBold'}
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'secondary.dark',
                    paddingTop: '0.5em',
                }}
            >
                General Links
            </Typography>
            <Box
                sx={{
                    color: 'text.secondary',
                    py: '0.5em',
                    wordBreak: 'break-word',
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    boxShadow: 0,
                    overflowX: 'auto',
                }}>
                {menuItems.map((element, index) => (
                    <Button
                        key={index}
                        type="button"
                        variant="text"
                        sx={{
                            fontSize: 'smaller',
                            color: 'text.secondary',
                            maxWidth: '100%',
                            '&:hover': {
                                color: 'primary.contrastText'
                            },
                            '&:first-child': { paddingLeft: 0 }
                        }}
                        onClick={() => {
                            document.getElementById(element.href)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        <ChevronRightIcon />
                        {element.label}
                    </Button>
                ))}
            </Box>
        </Grid2>
    );
}

export default GeneralLinks;
