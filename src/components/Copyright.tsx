import * as React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';

export default function Copyright() {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'primary.dark',
      color: 'text.secondary',
      padding: '1em'
    }}>
      <CopyrightIcon sx={{
        fontSize: 'small',
        paddingRight: '0.1em',
        paddingBottom: '0.1em',
      }} />
      {new Date().getFullYear() + ' '}
      All Rights Reserved - Holy Cross Tours and Travels
    </Box>
  );
}
