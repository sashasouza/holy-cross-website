import { Box, Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';

import { contacts } from '../components/constants'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { WhatsApp } from '@mui/icons-material';

function ContactUs() {
    return (
        <Grid2 id="ContactUs" sx={{
            width: "100%",
            minWidth: '200',
            px: { sm: '0.5em', md: '1em' },
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
                Contact Us
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'text.secondary',
                    py: '0.5em',
                    wordBreak: 'break-word',
                }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{
                            fontSize: 'smaller'
                        }}>
                            <PhoneIcon sx={{
                                color: 'text.secondary'
                            }} />
                        </ListItemIcon>
                        <ListItemText>
                            <strong>Contact Number:</strong> {contacts.phone}
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <EmailIcon sx={{
                                color: 'text.secondary'
                            }} />
                        </ListItemIcon>
                        <ListItemText>
                            <strong>Email:</strong> {contacts.email}
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <PlaceIcon sx={{
                                color: 'text.secondary'
                            }} />
                        </ListItemIcon>
                        <ListItemText>
                            <strong>Address:</strong> {contacts.address}
                        </ListItemText>
                    </ListItem>
                    <ListItem disablePadding sx={{
                        paddingTop: '1em'
                    }}>
                        <ListItemIcon>
                            <Link href={`https://wa.me/${contacts.phone}`}>
                                <WhatsApp sx={{
                                    color: 'text.secondary'
                                }} />
                            </Link>
                        </ListItemIcon>
                        <ListItemIcon>
                            <Link href="https://www.instagram.com/holycrosstoursandtravels?utm_source=qr&igsh=cjU1amVpcGt2bHpu">
                                <InstagramIcon sx={{
                                    color: 'text.secondary'
                                }} />
                            </Link>

                        </ListItemIcon>
                    </ListItem>
                </List>
            </Box>
        </Grid2>
    );
}

export default ContactUs;
