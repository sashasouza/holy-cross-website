import * as React from 'react';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

export default function About() {
    return (
        <Button variant="contained" component={NextLink} href="/">
            Go to the home page
        </Button>
    );
}
