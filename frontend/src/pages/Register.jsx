// import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Field, useFormik } from 'formik'
import *as yup from "yup"
import auth from '../service/api'
// menu item start
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import addUserDataAction from '../redux/User/userAction';
import { Select } from '@mui/material';
import UserRegisterwithLoginAction from '../redux/User/userAction';
// menu item end

const theme = createTheme();

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { allUserVal } = useSelector(state => state.allUsers)
    const [ragisterData, setRagisterData] = useState([])
    const formik = useFormik({
        initialValues: {
            name: "ansh",
            email: "vharkal16@gmail.com",
            password: "123",
            profile: "son",
            contact: "444",
            pin: "444"
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup
                .string()
                .min(3, "Minimum Three Character Required")
                .max(6, "Max Six Character Required")
                .required("Please Enter Your Password "),
            profile: yup.string().required(),
            contact: yup.string().required(),
            pin: yup.string().required(),



        }),
        onSubmit: (values) => {
            console.log(values);

            // setVal(values)

            console.log("hello");
            dispatch(UserRegisterwithLoginAction(values))
            navigate("/step")

        }

    })
    return <>

        <ThemeProvider theme={theme} >
            <Container sx={{ bgcolor: "secondary" }} component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        bgcolor: "danger",
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontFamily: "revert-layer",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="secondary.main">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.name && formik.touched.name
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.email && formik.touched.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.password && formik.touched.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="password"
                                    type="text"
                                    id="password"
                                    autoComplete="family-name"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.password}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                                    <Select
                                        component="select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Profile"
                                        name="profile"
                                        value={formik.values.profile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.profile && formik.touched.profile
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [
                                                "self",
                                                "son",
                                                "daughter",
                                                "sister",
                                                "relative",
                                                "friend",
                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.profile}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    name="contact"
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.contact && formik.touched.contact
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="Contact"
                                    type="contact"
                                    id="contact"
                                    autoComplete="new-contact"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.contact}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    name="pin"
                                    value={formik.values.pin}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.pin && formik.touched.pin
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="Enter Pin"
                                    type="pin"
                                    id="pin"
                                    autoComplete="new-pin"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.pin}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </>
}

