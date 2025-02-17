import * as React from 'react';
import Image from 'next/image';
import { Box, Grid2, Typography } from '@mui/material';

import BigLogo from '../assets/3_Logo_Intro.png';
import RedLeftArrowBg from '../assets/HeaderTitleRedBG.png';
import HomeAboutBG from '../assets/homeAboutBG.png';
import HomeAboutBGMobile from '../assets/homeAboutBG-Responsive.png';
import NoImg from '../assets/4_No.png';
import HighlightBoxes from '../components/HighlightBoxes';

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
                Content here
            </Typography>
        </>
    );
};
