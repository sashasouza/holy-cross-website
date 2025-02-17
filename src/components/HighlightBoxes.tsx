import { Box, Button, Grid2, Typography } from '@mui/material';
import BigLogo from '../assets/3_Logo_Intro.png';
import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import { paletteColorsOrder } from './constants';

interface HighlightBoxesProps {
    highlightDetails: {
        title?: string;
        description: string;
        linkText: string;
        image: StaticImageData;
    }[];
}

export default function HighlightBoxes({ highlightDetails }: HighlightBoxesProps) {
    return highlightDetails.map((detail, idx) => (
        <Grid2 container alignItems="center" justifyContent="center" direction={idx % 2 === 0 ? 'row' : 'row-reverse'}>
            <Grid2 size={{ xs: 12, sm: 6 }} height={400}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={detail.image}
                        alt={detail.title ?? detail.description}
                        style={{
                            width: '50%',
                            height: 'auto',
                        }}
                    />
                    {detail.title && (
                        <Button variant="contained" component={NextLink} href="/" sx={{ position: 'absolute', p: 1 }}>
                            <Typography fontWeight={900} textTransform="uppercase" variant="h6">
                                {detail.title}
                            </Typography>
                        </Button>
                    )}
                </Box>
            </Grid2>
            <Grid2
                size={{ xs: 12, sm: 6 }}
                height={400}
                justifyItems="center"
                alignContent="center"
                sx={{ backgroundColor: paletteColorsOrder[idx % 3] }}
                px={1}
            >
                <Typography color="primary" fontWeight={500} variant="h6" p={{ xs: 2, md: 5 }}>
                    {detail.description}
                </Typography>
                <Typography
                    color="primary"
                    variant="h5"
                    textTransform="uppercase"
                    mt={1}
                    sx={{
                        ':hover': {
                            fontWeight: 700,
                        },
                    }}
                >
                    {detail.linkText}
                </Typography>
            </Grid2>
        </Grid2>
    ));
}
