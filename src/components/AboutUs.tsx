import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AboutUs() {
    return (
        <Card id="AboutUs"
            sx={{
                paddingX: '2em',
                boxShadow: 0
            }}
        >
            <Typography variant="h4" fontWeight={'fontWeightBold'} sx={{ color: "primary.dark", margin: '0.35em 0 0 0.35em' }}>
                Welcome To HOLYCROSS TOURS AND TRAVELS
            </Typography>
            <CardContent sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Typography variant="body2">
                    It all started in 2016 when the proprietor, Mr Arnold Francis Coutinho thought of starting something new and he started this business with a New Maruti Ciaz. <br /><br />

                    He didn't have any knowledge of the taxi business but only a desire to acquire new cars. He started this business with trust in the Almighty God, but as days passed he had ups and downs and people started harassing him.
                    Due to this he went to a holy cross shrine with his son and said Jesus had to take up the cross to attain salvation for Mankind. <br /><br />

                    From this day onwards things improved and his faith in the Holy Cross deepened and that is why the name of this taxi business is HOLYCROSS TOURS AND TRAVELS. <br /><br />

                    Slowly the business flourished and today he is doing business in this name and the only motto is to make the customers comfortable and feel at home. One thing to remember is that we are solely relying on the customers for our betterment and we try our level best to keep the guests happy and smiling So keep SMILING and Make the world a Better Place.
                </Typography>
            </CardContent>
        </Card>
    );
}
