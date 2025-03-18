import * as React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

import CabList from '@/components/CabList';
import BookCab from '@/components/BookCab';
import AboutUs from '@/components/AboutUs';
import CarRental from '@/components/CarRental';
import Assistance from '@/components/Assistance';
import Reviews from '@/components/Reviews';

export const metadata = {};

export default function Home() {
    return (
        <>
            <Hero />
            {/* <Map /> */}
        </>
    );
}

const Map = () => {
    return (
        <Box width="100%" height={400}>
            {/* <iframe
                src="https://www.google.com/maps/embed/v1/view?zoom=13&center=15.6598%2C73.7429"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
        </Box>
    );
};

const Hero = () => {
    return (
        <>
            <Typography color="primary" variant="h5">
                <Grid2 container spacing={2} display="flex" justifyContent="space-around" alignItems="center" size="grow" sx={{
                    padding: '1em',
                    backgroundColor: '#F5F5F5',
                    scrollMargin: '1em',
                    scrollBehavior: 'smooth'
                }}>
                    <Grid2>
                        <CabList />
                    </Grid2>
                    <Grid2>
                        <BookCab />
                    </Grid2>
                </Grid2>
                <Grid2>
                    <AboutUs />
                </Grid2>
                <Grid2>
                    <CarRental />
                </Grid2>
                <Grid2>
                    <Assistance />
                </Grid2>
                <Grid2>
                    <Reviews />
                </Grid2>
            </Typography>
        </>
    );
};
