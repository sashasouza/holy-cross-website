'use client'
import { Button, Grid2 as Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ContactUs() {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleClick(e: { preventDefault: () => void; }): React.MouseEventHandler<HTMLButtonElement> | void {
        e.preventDefault()
        let data = {
            name,
            mobile,
            email,
            message
        }

        fetch('./api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMobile('')
                setMessage('')
            }
        })
    }

    return (
        <Grid>
            <Grid>
                <form
                    id="contact-form"
                >
                    <Grid>
                        <TextField
                            fullWidth
                            required
                            id="name"
                            label="Name"
                            name="name"
                            margin="normal"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile"
                            name="mobile"
                            margin="normal"
                            value={mobile}
                            onChange={(e) => { setMobile(e.target.value) }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            margin="normal"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            required
                            id="message"
                            label="Message"
                            name="message"
                            margin="normal"
                            multiline
                            maxRows="4"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                    </Grid>
                    <Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: "100%",
                                marginTop: "1em"
                            }}
                            onClick={(e) => handleClick(e)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}