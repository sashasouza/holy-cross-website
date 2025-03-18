import { Divider, Grid2, Typography } from '@mui/material';
import React from 'react';
import Copyright from '@/components/Copyright';
import ContactUs from './ContactUs';
import GeneralLinks from './GeneralLinks';

function Footer() {
    return (
        <Grid2>
            <Grid2 container spacing={2} display="flex" justifyContent='space-between' alignItems="flex-start" size="grow" sx={{
                backgroundColor: 'primary.main',
                //px: { xs: '1em', sm: '4em', md: '1em' }
                padding: '1em',
            }}>
                <Grid2>
                    <Typography>
                        <GeneralLinks />
                    </Typography>
                </Grid2>
                <Grid2>
                    <Typography>
                        <ContactUs />
                    </Typography>
                </Grid2>
            </Grid2>
            <Typography>
                <Copyright />
            </Typography>
        </Grid2>
    );
}

export default Footer;
