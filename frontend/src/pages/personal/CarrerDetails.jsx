import React, { useState, useEffect } from 'react'

import axios from "axios"
import fb from "./../../images/fb.jpg"
import twiter from "./../../images/twiter.webp"
import linkdin from "./../../images/linkdin1.webp"
import jivanHeading from "./../../images/downloadjivan.png"
import "./personalDetails.css"
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

import { useNavigate } from 'react-router-dom';

import { Box, Button, Container, createTheme, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider, Typography } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import { useFormik } from 'formik'
import *as yup from "yup"
import { useDispatch } from 'react-redux'
import { secondDataAction } from '../../redux/User/userAction'

const theme = createTheme();


export default function CarrerDetails({currentStep,setCurrentStep,setVal}) {
      const dispatch= useDispatch()
    const formik = useFormik({
        initialValues: {
            Ecountry: "india",
            employed: "",
            income: "",
            aboutSelf: "uuuuu",


        },
        validationSchema: yup.object({


            Ecountry: yup.string().required(),
            employed: yup.string().required("Please Enter Your Password "),
            income: yup.string().required(),
            aboutSelf: yup.string().required(),


        }),

        onSubmit: (values) => {

            console.log(values);
            console.log("hello");
            setVal(values)
            dispatch(secondDataAction(values))
            setCurrentStep(currentStep +1)
            

        }


    })
    const navigate = useNavigate()
    const [Ecountry, setCountry] = useState([])

    const handleDataCountry = async () => {
        const { data } = await axios.get("https://countriesnow.space/api/v0.1/countries/states")
        setCountry(data.data)

    }

    useEffect(() => {
        handleDataCountry()
    }, [])



    return <>
        {/* {JSON.stringify(Ecountry)} */}

        {/* {JSON.stringify(formik.values)} */}
        {JSON.stringify(formik.errors)}

        <div>

            <h4 className='mt-5 mb-5 text-center'>Complete your income now to contact members you like and to receive interests</h4>
            <p className='text-center text-danger' style={{ paddingLeft: "40%" }}>mandatory*</p>
            {/* <div className=" personalHeading">Carrer-Details</div> */}
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

                        <div className=" personalHeading">Carrer-Details</div>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 3 }}

                        >
                                 <Grid container spacing={2} mt={4}>
                                
                                 <Grid item xs={12} mt={2} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label"> Your Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Enter Your Ecountry"
                                            color='secondary'
                                            required
                                            name='Ecountry'
                                            value={formik.values.Ecountry}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={
                                                formik.errors.Ecountry && formik.touched.Ecountry
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }>

                                            <MenuItem value="" >
                                                <em>select the value</em>
                                            </MenuItem>
                                            {

                                                Ecountry && Ecountry.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
                                            }


                                        </Select>
                                    </FormControl>
                                    <Typography
                                        sx={{ color: "red", fontFamily: "revert-layer" }}
                                        className="invalid-feedback">
                                        {formik.errors.Ecountry}
                                    </Typography>

                                </Grid>
                                <Grid item xs={12}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label"> Your Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Enter Your employed"
                                            color='secondary'
                                            required
                                            name="employed"
                                            value={formik.values.employed}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={
                                                formik.errors.employed && formik.touched.employed
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }>

                                            <MenuItem value="" >
                                                <em>select the value</em>
                                            </MenuItem>
                                            {

                                                [
                                                    "Private Sector",
                                                    "Goverment/Public",
                                                    "Busines/Self-Employ",
                                                    "Sevil-Services",
                                                    "Defence",
                                                    "Not-Working"

                                                ].map(item => <MenuItem key={item.id} value={item}>{item}</MenuItem>)
                                            }


                                        </Select>
                                    </FormControl>

                                    <Typography
                                        sx={{ color: "red", fontFamily: "revert-layer" }}
                                        className="invalid-feedback"
                                    >
                                        {formik.errors.employed}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Profile"
                                            name="income"
                                            value={formik.values.income}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={
                                                formik.errors.income && formik.touched.income
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        >

                                            <MenuItem value="" >
                                                <em>select the value</em>
                                            </MenuItem>
                                            {

                                                [
                                                    "0.1",
                                                    "1.2",
                                                    "2.3",
                                                    "3.4",
                                                    "4.5",
                                                    "5.10",
                                                    "10.20",
                                                    "20.above"

                                                ].map(item => <MenuItem key={item.id} value={item}>{item}</MenuItem>)
                                            }


                                        </Select>
                                    </FormControl>
                                    <Typography
                                        sx={{ color: "red", fontFamily: "revert-layer" }}
                                        className="invalid-feedback"
                                    >
                                        {formik.errors.income}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} >

                                    <p className='fs-5 text-center text-dark'>Here Is Chance To Make Your Profile stand Out!</p>
                                    <TextField
                                        name="aboutSelf"
                                        value={formik.values.aboutSelf}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.aboutSelf && formik.touched.aboutSelf
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        } />

                                    <Typography
                                        sx={{ color: "red", fontFamily: "revert-layer" }}
                                        className="invalid-feedback"
                                    >
                                        {formik.errors.aboutSelf}
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Submit
                            </Button>
                        </Box>


                    </Box>
                </Container>
            </ThemeProvider>





        </div>
        {/* ///footer// */}
        <div className='mt-5'>
            <div className="row footer">
                <div className="col-sm-4 mt-2 ps-5">
                    <span className=' text-white ' style={{ fontFamily: "initial", fontSize: "22px" }}>1-800-419-6299 (Toll Free)|Live Chat</span>
                </div>
                <div className="col-sm-4 mt-2 d-flex gap-2" style={{ paddingLeft: "10%" }}>
                    <img src={jivanHeading} alt="" width={100} height={50} />


                </div>
                <div className="col-sm-4 mt-2 d-flex gap-2 ps-5 ">
                    <img src={fb} alt="" width={30} height={30} />
                    <img src={twiter} alt="" width={30} height={30} />
                    <img src={linkdin} alt="" width={30} height={30} />

                </div>
            </div>

        </div>
        <div className='h-75 w-100 bg-secondary text-center text-white mt-3 mb-2 font-monospace'>
            All rights reserved © 2023 Jeevansathi Internet Services.
        </div>



    </>
}




