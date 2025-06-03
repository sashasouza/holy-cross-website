'use client'
import { Backdrop, Button, CircularProgress, Container, Dialog, DialogContent, DialogTitle, Grid2 as Grid, IconButton, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    }
}));

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID == null ? "" : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID == null ? "" : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY == null ? "" : process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactUs() {
    var msg = "";
    var title = "";
    const [open, setOpen] = React.useState(false);
    const [openSpinner, setOpenSpinner] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleOpenSpinner = () => {
        setOpenSpinner(true);
    };
    const handleCloseSpinner = () => {
        setOpenSpinner(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [mobileError, setMobileError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    async function handleClick(e: { preventDefault: () => void; }): Promise<React.MouseEventHandler<HTMLButtonElement> | void> {
        e.preventDefault()
        handleOpenSpinner

        if ((mobile.length > 0 && mobile.match("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")) || (email.length > 0 && email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"))) {
            try {
                const emailParams = {
                    name: name,
                    email: email,
                    mobile: mobile,
                    message: message
                };

                const res = await emailjs.send(serviceID, templateID, emailParams, userID);

                if (res.status === 200) {
                    handleClickOpen()
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setMobile('')
                    setMessage('')
                    handleCloseSpinner
                    title = "Request Submitted"
                    msg = "Thank you for your interest in our services! HolyCross Tours and Travels will get back to you soon."
                }
                else {
                    handleCloseSpinner
                    title = "Request Submission Failed"
                    msg = "Failed to send message. Please try again later."
                }
            } catch (error) {
                handleCloseSpinner
                title = "Request Submission Failed"
                msg = "Failed to send message. Please try again later."
            }
        }
        else {
            handleCloseSpinner
            title = "Missing Data"
            msg = "Please enter either a valid mobile number or valid email address so that we can get in touch with you."
        }
    }

    return (
        <Grid>
            <Backdrop
                sx={() => ({ color: '#fff', zIndex: 99 })}
                open={openSpinner}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid>
                <form
                    id="contact-form"
                >
                    <Grid>
                        <TextField
                            fullWidth
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
                            error={mobileError}
                            id="mobile"
                            label="Mobile"
                            name="mobile"
                            margin="normal"
                            value={mobile}
                            onChange={(e) => { setMobile(e.target.value), e.target.value.match("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$") ? setMobileError(false) : setMobileError(true) }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            required
                            error={emailError}
                            id="email"
                            label="Email"
                            name="email"
                            margin="normal"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value), e.target.value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$") ? setEmailError(false) : setEmailError(true) }}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
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
            <Container>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2, backgroundColor: 'secondary.light' }} id="customized-dialog-title">
                        {title}
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={() => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'primary.dark'
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom variant='body2'>
                            {msg}
                        </Typography>
                    </DialogContent>
                </BootstrapDialog>
            </Container>
        </Grid>
    );
}