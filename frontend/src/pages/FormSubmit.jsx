import { Box, Button, Grid, Paper, Step, StepButton, StepLabel, Stepper } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import Finish from './personal/Finish'
import CarrerDetails from './personal/CarrerDetails'
import LifeStyle from './personal/LifeStyle'
import PersonalDetails from './personal/PersonalDetails'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useDispatch } from 'react-redux'
import { addUserAllDataAction } from '../redux/User/userAction'


function FormSubmit() {
    const dispatch = useDispatch()
    const [img, setImg] = useState([])
    const [val, setVal] = useState()
    // const [valueData, setValueData] = useState()


    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState([
        { label: "personal-Details" },
        { label: "personal-careear" },
        { label: "personal-LifeStyle" },
        // { label: "Done" }
    ])




    const getCurrentSteps = (steps) => {
        switch (steps) {
            case 0: return <PersonalDetails setImg={setImg} setCurrentStep={setCurrentStep} currentStep={currentStep} setVal={setVal} />
            case 1: return <CarrerDetails setCurrentStep={setCurrentStep} currentStep={currentStep} setVal={setVal} />
            case 2: return <LifeStyle img={img} setCurrentStep={setCurrentStep} currentStep={currentStep} setVal={setVal} val={val} />
            default: return <PersonalDetails />
            // case 3: return <Finish setCurrentStep={setCurrentStep} currentStep={currentStep}  val={val} />
        }
    }


    return <>

        {/* <h1>
            {JSON.stringify(val)}
           <hr />
            
        </h1> */}

        <Grid container spacing={2} style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            background: "#E8E8E8"
        }}>
            <Grid item sx={12} md={8} >

                <Paper style={{ marginBottom: "10px" }} >
                    <Box p={2} mb={1}
                        style={{ display: "flex", justifyContent: "center", }}
                        sx={{ width: '100%', fontSize: 30, fontFamily: "sans-serif" }}>SteperComponent</Box>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={currentStep} >
                            {steps.map((item, i) => (
                                <Step key={i} style={{ marginBottom: "20px" }}>
                                    <StepLabel>
                                        {item.label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Paper>
                <Box component={Paper} >
                    {getCurrentSteps(currentStep)}
                </Box>


            </Grid>
        </Grid>


    </>
}

export default FormSubmit


