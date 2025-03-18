'use client';
import { Box, Button, Grid2, Link, Typography } from '@mui/material';
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
            <Typography
                variant="body1"
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'text.secondary',
                    py: '0.5em',
                    wordBreak: 'break-word'
                }}>
                <Box
                    sx={{
                        maxWidth: '100%', backgroundColor: 'primary.main',
                        display: 'flex',
                        direction: 'row',
                        justifyItems: 'left',
                        boxShadow: 0,
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
            </Typography>
        </Grid2>
    );
}

export default GeneralLinks;
