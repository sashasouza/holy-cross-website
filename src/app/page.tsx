import * as React from 'react';
import { Grid2 } from '@mui/material';

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
        </>
    );
}

const Hero = () => {
    return (
        <>
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
        </>
    );
};
