import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Main from '../assets/main.png';

export default function MediaCard() {
    return (
        <Card
            sx={{
                maxWidth: 750,
                margin: "0 auto",
                boxShadow: 0,
                backgroundColor: '#F5F5F5'
            }}
        >
            <CardMedia
                component="img"
                height="360"
                image={Main.src}
                alt={"alt"}
                title={"titleasdasdsada"}
                sx={{ objectFit: "contain", borderRadius: '5px' }}
            />
        </Card>
    );
}
