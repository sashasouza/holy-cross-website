import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Form from './Form';
import { Link, Typography } from '@mui/material';

import { contacts } from './constants';
export default function Assistance() {
    return (
        <Card sx={{
            backgroundColor: "primary.dark",
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%'
        }}>
            <CardContent sx={{
                backgroundColor: "primary.dark",
                margin: '0 1em 1em 1em',
            }}>
                <Typography variant="h3" sx={{ textAlign: 'center', color: "primary.contrastText", padding: '0.3em' }}>
                    For Any Assistance Just <Link href={`tel:${contacts.phone}`} underline="none" color='secondary.light'>Call</Link> or <Link href={`https://wa.me/${contacts.phone}`} underline="none" color='secondary.light'>send a WhatsApp message</Link> to {contacts.phone} <br />
                </Typography>
            </CardContent>
        </Card>
    );
}
