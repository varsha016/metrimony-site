import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"

import axios from "axios";
import RingImagePro from "./../../images/happy marray.jpg";
import RingImage from "./../../images/imagesmy.png";
import fb from "./../../images/fb.jpg";
import twiter from "./../../images/twiter.webp";
import linkdin from "./../../images/linkdin1.webp";
import jivanHeading from "./../../images/downloadjivan.png";
import hertImagge from "./../../images/hert.jpg";

import "./personalDetails.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,

  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import { firstDataAction } from "../../redux/User/userAction";
export default function PersonalDetails({ currentStep, setCurrentStep, setImg }) {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [myAvatar, setMyAvatar] = useState();
  const [state, setState] = useState([]);
  const [country, setcountry] = useState([]);
  const [city, setcity] = useState([]);

  const formik = useFormik({
    initialValues: {
      dofb: "",
      gender: "female",
      religion: "hindu",
      motherTongue: "kannada",
      marryStatus: "nevermarried",
      height: "4.11",
      country: "",
      state: state,
      city: "",
    },
    validationSchema: yup.object({

      // avatar: yup.string(),
      dofb: yup.string().required("Please Enter Your DofB "),
      gender: yup.string().required("A radio option is required"),
      religion: yup.string().required("Please Enter Your religion "),
      motherTongue: yup.string().required("Please Enter Your motherStatus "),
      marryStatus: yup.string().required("Please Enter Your marryStatus "),
      height: yup.string().required("Please Enter Your height "),
      country: yup.string().required("Please Enter Your country "),
      state: yup.string().required("Please Enter Your state "),
      city: yup.string().required("Please Enter Your city "),
    }),

    onSubmit: (values) => {
      // console.log(myAvatar)
      dispatch(firstDataAction({ ...values }))
      setCurrentStep(currentStep + 1)

    },
  });


  const handleCountryData = async () => {
    const {
      data: { data },
    } = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
    // console.log(data);
    setcountry(data);
  };

  const handleStateData = async (arg) => {
    const { data: { data } } = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
    const x = data.filter((item) => item.name === arg);
    setState(x[0].states.map(item => item.name))
  };

  const handleDataCity = async (arg) => {
    const { data: { data }, } = await axios.get("https://countriesnow.space/api/v0.1/countries");
    // console.warn(data.cities);
    // console.log(arg)
    // const x = data.cities.filter((item) => item === arg);
    //   console.log(x)
    setcity(data[0].cities)
  };
  useEffect(() => {
    handleCountryData()
  }, []);



  useEffect(() => {
    handleDataCity();
  }, []);

  return (
    <>
      {/* {JSON.stringify(state)} */}
      {/* {JSON.stringify(city)} */}
      {JSON.stringify(formik.errors, null, 2)}
      {JSON.stringify(formik.values, null, 2)}

      <div className="bgConteiner ">
        <Grid container spacing={2} p={3} className="bgCard">
          <Box align="center">
            <Typography className="hTag" variant="h6">
              Complete your profile now to contact members you like and to
              receive interests
            </Typography>
            <Typography className="personalHeading" mt={2}>
              Personal-Details
            </Typography>
          </Box>
          <Grid item xs={12}>
            <h5
              className="text-center text-danger"
              style={{ paddingLeft: "80%", margin: "10px" }}
            >
              mandatory*
            </h5>
            <Card>
              <CardContent>
                <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid item xs={12} mt={2}>
                    <Input type='file'
                      inputProps={{ multiple: true }}
                      onChange={e => setImg(e.target.files)}
                      placeholder="Your Avatar"></Input>
                  </Grid>

                  <Grid item xs={12} mt={2}>
                    <TextField
                      type="date"
                      color="secondary"
                      required
                      name="dofb"
                      value={formik.values.dofb}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.dofb && formik.touched.dofb
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.dofb}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.gender && formik.touched.gender
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>

                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.gender}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Religion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your Religion"
                        color="secondary"
                        name="religion"
                        value={formik.values.religion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.religion && formik.touched.religion
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {[
                          "hindu",
                          "buddhist",
                          "parsi",
                          "muslim",
                          "Bahai",
                          "jain",
                          "jewish",
                          "sikh",
                          "christain",
                        ].map((item) => (
                          <MenuItem key={item.id} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.religion}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        MotherTongue
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your motherTongue"
                        color="secondary"
                        required
                        name="motherTongue"
                        value={formik.values.motherTongue}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.motherTongue &&
                            formik.touched.motherTongue
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {[
                          "english",
                          "bengali",
                          "hindi",
                          "sanskrit",
                          "tamil",
                          "urdu",
                          "kannada",
                          "gujarati",
                          "marathi",
                          "punjabi",
                          "sindhi",
                        ].map((item) => (
                          <MenuItem key={item.id} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.motherTongue}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {" "}
                        Your MarryStatus
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your marryStatus"
                        color="secondary"
                        required
                        name="marryStatus"
                        value={formik.values.marryStatus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.marryStatus &&
                            formik.touched.marryStatus
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {[
                          "nevermarried",
                          "divorced",
                          "widowed",
                          "awaitingdivorce",
                          "annulled",
                        ].map((item) => (
                          <MenuItem key={item.id} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.marryStatus}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Height
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your Height"
                        color="secondary"
                        required
                        name="height"
                        value={formik.values.height}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.height && formik.touched.height
                            ? "form-control is-invalid"
                            : "form-control"
                        }

                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {[
                          "4.1 ",
                          "4.2 ",
                          "4.3 ",
                          "4.4 ",
                          "4.5 ",
                          "4.6 ",
                          "4.7 ",
                          "4.8 ",
                          "4.9 ",
                          "4.10",
                          "4.11",
                          "4.11",
                          "5.1 ",
                          "5.2 ",
                          "5.3 ",
                          "5.4 ",
                          "5.5 ",
                          "5.6 ",
                          "5.7 ",
                          "5.8 ",
                          "5.9 ",
                          "5.10",
                          "5.11",
                          "6.1",
                          "6.2 ",
                          "6.3 ",
                          "6.4 ",
                          "6.5 ",
                          "6.6 ",
                          "6.7 ",
                          "6.8 ",
                          "6.9 ",
                          "6.10",
                          "6.11",
                          "7",
                        ].map((item) => (
                          <MenuItem value={item} key={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.height}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Your Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your country"
                        color="secondary"
                        required
                        name="country"
                        value={formik.values.country}
                        onChange={e => {
                          formik.handleChange(e)
                          handleStateData(e.target.value)

                        }
                        }
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.country && formik.touched.country
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <MenuItem value="">
                          <SearchBar country={country} />
                          {/* <em>select the value</em> */}
                        </MenuItem>
                        {country &&
                          country.map((item) => (
                            <MenuItem key={item.id} value={item.name}>
                              {item.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.country}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {" "}
                        Your State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your state"
                        color="secondary"
                        required
                        name="state"
                        // value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.state && formik.touched.state
                            ? "form-control is-invalid"
                            : "form-control"
                        }

                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {state && state.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.state}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">

                        Your City
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Enter Your city"
                        color="secondary"
                        required
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.city && formik.touched.city
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <MenuItem value="">
                          <em>select the value</em>
                        </MenuItem>
                        {city &&
                          city.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <Typography
                      sx={{ color: "red", fontFamily: "revert-layer" }}
                      className="invalid-feedback"
                    >
                      {formik.errors.city}
                    </Typography>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    submit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* <Grid item xs={6} mt={4}>
                    <Typography >

                        <img src={RingImagePro} className="img-fluid mt-2 m-2" width={440} alt="" />
                        <img src={RingImage} className="img-fluid mt-2 m-2 rounded" width={440} alt="" />
                        <img src={hertImagge} className="img-fluid mt-2 m-2" width={440} alt="" />

                    </Typography>

                </Grid> */}
        </Grid>
      </div>
      {/* ///footer// */}
      <div>
        <div className="row footer">
          <div className="col-sm-4 mt-2 ps-5">
            <span
              className=" text-white "
              style={{ fontFamily: "initial", fontSize: "22px" }}
            >
              1-800-419-6299 (Toll Free)|Live Chat
            </span>
          </div>
          <div
            className="col-sm-4 mt-2 d-flex gap-2"
            style={{ paddingLeft: "10%" }}
          >
            <img src={jivanHeading} alt="" width={140} height={50} />
          </div>
          <div className="col-sm-4 mt-2 d-flex gap-2 ps-5 ">
            <a href="https://www.facebook.com/jeevansathi">
              <img src={fb} alt="" width={34} height={30} />
            </a>
            <a href="https://www.linkedin.com/company/info-edge-india-ltd/">
              {" "}
              <img src={linkdin} alt="" width={34} height={30} />
            </a>
            <a href="https://twitter.com/jeevansathi_com">
              <img src={twiter} alt="" width={34} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="h-40 w-100 bg-secondary text-center text-white mt-3 mb-2 font-monospace">
        All rights reserved © 2023 Jeevansathi Internet Services.
      </div>
    </>
  );
}
