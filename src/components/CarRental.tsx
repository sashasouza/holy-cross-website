import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Grid2, Typography } from '@mui/material';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import { vehicles } from './constants';

export default function CarRental() {
    return (
        <Card
            id="CarRental"
            sx={{
                paddingX: '2em',
                boxShadow: 0,
                backgroundColor: '#F5F5F5'
            }}
        >
            <Typography variant="h4" fontWeight={'fontWeightBold'} sx={{ color: "primary.dark", margin: '0.35em 0 0 0.35em' }}>
                Car Rental
            </Typography>
            <CardContent sx={{
                backgroundColor: '#F5F5F5'
            }}>
                <Typography variant="body2">
                    At Holycross Tours and Travels, we pride ourselves on providing top-tier taxi services across Goa, Mumbai, and Karnataka. Our extensive fleet is designed to meet the diverse needs of our clientele, ensuring comfort, safety, and reliability. Whether you are traveling for business or leisure, we have the perfect vehicle to cater to your requirements.
                </Typography>
                <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" size="grow" sx={{
                    marginTop: 2
                }}>
                    {vehicles.map((element, index) => (
                        <Card
                            raised
                            key={index}
                            sx={{
                                maxWidth: 300,
                                minWidth: 200,
                                width: '100%',
                                transition: "transform 0.15s ease-in-out",
                                "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="100"
                                image={element.vehicleImage.src}
                                alt={element.vehicleName}
                                title={element.vehicleName}
                                sx={{ objectFit: "contain", borderRadius: '5px' }}
                            />
                            <CardContent sx={{
                                paddingX: 0,
                                '&:last-child': { paddingBottom: 0 }
                            }}>
                                <Typography variant="h5" component="div" sx={{
                                    paddingX: '0.5em'
                                }}>
                                    {element.vehicleName}
                                </Typography>
                                <Typography component="div" sx={{
                                    fontSize: 'small',
                                    paddingX: '1em'
                                }}>
                                    Seating Capacity: {element.seatingCapacity}
                                </Typography>
                                <Box sx={{
                                    backgroundColor: 'secondary.light',
                                    fontWeight: 'fontWeightBold'
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, paddingX: '0.5em' }}>
                                        <Typography variant="body2" color="text.primary" sx={{ marginTop: 1 }}>
                                            Price per KM:
                                        </Typography>
                                        <Typography variant="body2" color="text.primary" sx={{ marginTop: 1 }}>
                                            {element.pricePerKm}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, paddingX: '0.5em' }}>
                                        <Typography variant="body2" color="secondary.main" sx={{ marginBottom: 1, fontWeight: '700' }}>
                                            <CurrencyRupeeIcon sx={{
                                                fontSize: 'small',
                                                marginBottom: '-0.15em',
                                                fontWeight: '700'
                                            }} />On Request/-:
                                        </Typography>
                                        <Typography variant="body2" color="secondary.main" sx={{ marginBottom: 1, fontWeight: '700' }}>
                                            <CurrencyRupeeIcon sx={{
                                                fontSize: 'small',
                                                marginBottom: '-0.1em',
                                                fontWeight: '700'
                                            }} />
                                            {element.priceOnRequest}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Grid2>
            </CardContent>
        </Card>
    );
}