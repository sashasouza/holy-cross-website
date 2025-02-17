import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Grid2 } from '@mui/material';
import BigLogo from '../assets/3_Logo_Intro.png';
import Image from 'next/image';

export default function ComingSoon() {
    return (
        <Grid2 container sx={{ height: '100vh', width: '100vw' }} alignItems="center" justifyContent="center" direction="column">
            <Grid2>
                <Image
                    src={BigLogo}
                    alt="intro logo"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Grid2>
            <Grid2>
                <Typography variant="h5" fontWeight="300">
                    The Mandrem Hostel
                </Typography>
            </Grid2>
            <Grid2>
                <Typography variant="h6" fontWeight="300">
                    Coming Soon
                </Typography>
            </Grid2>
        </Grid2>
    );
}
