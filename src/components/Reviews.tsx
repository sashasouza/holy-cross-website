import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';

import { reviews } from './constants';

export default function Reviews() {
    return (
        <Card
            sx={{
                maxWidth: '90%',
                margin: "0 auto",
                boxShadow: 0,
                textAlign: 'center'
            }}
        >
            <CardContent>
                <Typography variant="h4" fontWeight={'fontWeightBold'} sx={{ color: "primary.dark", margin: '0.35em 0 0.35em 0.35em' }}>
                    Feedback from our Guests
                </Typography>
                <Typography variant="body2">
                    Read Our Feedback on Google posted by our customers. We ensure that all our esteemed customers receive the best service all the time!
                </Typography>
                <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" size="grow" sx={{
                    marginTop: 2
                }}>
                    {
                        reviews.map((element, index) => (
                            <Card
                                key={index}
                                sx={{
                                    maxWidth: 300,
                                    width: '100%',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={element.src}
                                    alt={element.src}
                                    sx={{ objectFit: "contain", borderRadius: '5px' }}
                                />
                            </Card>
                        ))
                    }
                </Grid2>
                <Button
                    type="button"
                    variant="contained"
                    sx={{
                        width: "200",
                        marginTop: "1em"
                    }}
                    target='_blank'
                    href='https://www.google.com/maps/place/HolyCross+Tours+and+Travels/@15.5025705,73.7690635,17z/data=!4m8!3m7!1s0x3bbfc1ed126de61d:0xee00ea374e32f34e!8m2!3d15.5025705!4d73.7716384!9m1!1b1!16s%2Fg%2F11q254vmk6?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D'
                >
                    View All Reviews
                </Button>
            </CardContent>
        </Card>
    );
}
