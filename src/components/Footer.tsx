import { Grid2 } from '@mui/material';
import React from 'react';
import Copyright from '@/components/Copyright';
import ContactUs from './ContactUs';
import GeneralLinks from './GeneralLinks';

function Footer() {
    return (
        <Grid2>
            <Grid2 container spacing={2} display="flex" justifyContent='space-between' alignItems="flex-start" size="grow" sx={{
                backgroundColor: 'primary.main',
                padding: '1em',
            }}>
                <Grid2>
                    <GeneralLinks />
                </Grid2>
                <Grid2>
                    <ContactUs />
                </Grid2>
            </Grid2>
            <Copyright />
        </Grid2>
    );
}

export default Footer;
