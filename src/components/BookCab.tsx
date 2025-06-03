import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Form from './Form';
import { Typography } from '@mui/material';

export default function BasicCard() {
    return (
        <Card sx={{
            minWidth: 320,
            maxWidth: 720,
            backgroundColor: "secondary.light"
        }}>
            <Typography variant="h5" sx={{ textAlign: 'center', color: "primary.dark", padding: '0.3em' }}>
                <strong>Book Cab</strong>
            </Typography>
            <CardContent sx={{
                backgroundColor: "primary.light",
                margin: '0 1em 1em 1em'
            }}>
                <Form />
            </CardContent>
        </Card>
    );
}
