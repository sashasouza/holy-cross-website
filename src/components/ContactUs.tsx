import { Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';

import { contacts } from '../components/constants'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

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
            <Typography
                variant='body1'
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
                </List>
            </Typography>
        </Grid2>
    );
}

export default ContactUs;
