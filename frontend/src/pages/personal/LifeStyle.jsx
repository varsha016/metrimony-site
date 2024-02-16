import {
    Box, Button, Container, createTheme,
    CssBaseline, FormControl, Grid, InputLabel, MenuItem, Select, Typography,
    TextField, ThemeProvider
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import RingImagePro from "./../../images/happy marray.jpg"
// import RingImage from "./../../images/imagesmy.png"
import fb from "./../../images/fb.jpg"
import twiter from "./../../images/twiter.webp"
import linkdin from "./../../images/linkdin1.webp"
import jivanHeading from "./../../images/downloadjivan.png"
// import hertImagge from "./../../images/hert.jpg"
import { useFormik } from 'formik'
import *as yup from "yup"
// import ReactQuill from 'react-quill';
import "./personalDetails.css"
import { useDispatch, useSelector } from 'react-redux'
import { addUserAllDataAction } from '../../redux/User/userAction'
import { useNavigate } from 'react-router-dom'


const theme = createTheme();

export default function LifeStyle({ currentStep, setCurrentStep, img }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { x, userRegisterWithData } = useSelector(state => state.allUsers)

    const formik = useFormik({
        initialValues: {
            familyType: "",
            fOccupation: "",
            mOccupation: "",
            brother: "",
            sister: "",
            text: ""
        },
        validationSchema: yup.object({
            familyType: yup.string().required("Enter family Type"),
            fOccupation: yup.string().required("Please Enter Your fOccupation "),
            mOccupation: yup.string().required("Please Enter Your mOccupation "),
            brother: yup.string().required("Entar your brother"),
            sister: yup.string().required("Enter Your Sister"),
            text: yup.string().required("text"),
        }),

        onSubmit: (values) => {
            const fd = new FormData()
            fd.append("dofb", x.dofb)
            fd.append("gender", x.gender)
            fd.append("religion", x.religion)
            fd.append("motherTongue", x.motherTongue)
            fd.append("marryStatus", x.marryStatus)
            fd.append("height", x.height)
            fd.append("country", x.country)
            fd.append("state", x.state)
            fd.append("city", x.city)
            /////////////////////////////////////////////////////
            fd.append("Ecountry", x.Ecountry)
            fd.append("employed", x.employed)
            fd.append("income", x.income)
            fd.append("aboutSelf", x.aboutSelf)
            /////////////////////////////////////////////////////
            fd.append("familyType", values.familyType)
            fd.append("fOccupation", values.fOccupation)
            fd.append("mOccupation", values.mOccupation)
            fd.append("brother", values.brother)
            fd.append("sister", values.sister)
            fd.append("text", values.text)
            ///////////////////////////////////////////////////////////////        

            for (const item of img) {
                fd.append("avatar", item)
            }

            for (const item of fd.entries()) {
                console.log(item);
            }

            // console.log(img)
            dispatch(addUserAllDataAction(fd))


        }
    })

    useEffect(() => {
        if (userRegisterWithData) {
            navigate("/allusers")
        }
    }, [userRegisterWithData])

    return <>
        {/* {JSON.stringify(formik.values)} */}

        <ThemeProvider theme={theme}>


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
                    }}>

                    <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 3 }}>
                        <Grid container spacing={2} marginTop={8}>

                            <Grid item xs={12}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Your familyType</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Enter Your familyType"
                                        color='secondary'
                                        required
                                        name="familyType"
                                        value={formik.values.familyType}
                                        onChange={
                                            formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.familyType && formik.touched.familyType
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }

                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [
                                                "select",
                                                "joinFamily",
                                                "nuclear",
                                                "Others",


                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.familyType}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Your Father-Occupation</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Enter Your fOccupation"
                                        color='secondary'
                                        required
                                        name="fOccupation"
                                        value={formik.values.fOccupation}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.fOccupation && formik.touched.fOccupation
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }

                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [
                                                "service-Govt",
                                                "service-pri",
                                                "civil-service",
                                                "Retired",
                                                "Business",
                                                "Expired",


                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.fOccupation}
                                </Typography>


                            </Grid>

                            <Grid item xs={12}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Your Mother-Occupation</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Enter Your mOccupation"
                                        color='secondary'
                                        required
                                        name="mOccupation"
                                        value={formik.values.mOccupation}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.mOccupation && formik.touched.mOccupation
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }

                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [
                                                "service-Govt",
                                                "house-wife",
                                                "service-pri",
                                                "civil-service",
                                                "Retired",
                                                "Business",
                                                "Expired",


                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.mOccupation}
                                </Typography>



                            </Grid>

                            <Grid item xs={12} >

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Your Brother</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Enter Your brother"
                                        color='secondary'
                                        required
                                        name="brother"
                                        value={formik.values.brother}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.brother && formik.touched.brother
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }

                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [

                                                "None",
                                                "1",
                                                "2",
                                                "3+",


                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.brother}
                                </Typography>


                            </Grid>

                            <Grid item xs={12} >

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"> Your Sister</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Enter Your sister"
                                        color='secondary'
                                        required
                                        name="sister"
                                        value={formik.values.sister}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={
                                            formik.errors.sister && formik.touched.sister
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }

                                    >

                                        <MenuItem value="" >
                                            <em>select the value</em>
                                        </MenuItem>
                                        {

                                            [

                                                "None",
                                                "1",
                                                "2",
                                                "3+",


                                            ].map(item => <MenuItem value={item}>{item}</MenuItem>)
                                        }


                                    </Select>
                                </FormControl>
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.sister}
                                </Typography>



                            </Grid>
                            <Grid item xs={12} >
                                <p className='fs-5 text-center text-dark'>Here Is Chance To Make Your Profile stand Out!</p>
                                <TextField
                                    name="text"
                                    value={formik.values.text}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.text && formik.touched.text
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback">
                                    {formik.errors.text}
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
        <div>
            <div className="row footer">
                <div className="col-sm-4 mt-2 ps-5">
                    <span className=' text-white ' style={{ fontFamily: "initial", fontSize: "22px" }}>1-800-419-6299 (Toll Free)|Live Chat</span>
                </div>
                <div className="col-sm-4 mt-2 d-flex gap-2" style={{ paddingLeft: "10%" }}>
                    <img src={jivanHeading} alt="" width={140} height={50} />


                </div>
                <div className="col-sm-4 mt-2 d-flex gap-2 ps-5 ">
                    <a href="https://www.facebook.com/jeevansathi"><img src={fb} alt="" width={34} height={30} /></a>
                    <a href="https://www.linkedin.com/company/info-edge-india-ltd/"> <img src={linkdin} alt="" width={34} height={30} /></a>
                    <a href="https://twitter.com/jeevansathi_com"><img src={twiter} alt="" width={34} height={30} /></a>



                </div>
            </div>

        </div>
        <div className='h-40 w-100 bg-secondary text-center text-white mt-3 mb-2 font-monospace'>
            All rights reserved © 2023 Jeevansathi Internet Services.
        </div>


    </>
}

