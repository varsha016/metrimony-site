import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Divider } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import image1 from "./../images/jivan page-img1.jpg"
import image2 from "./../images/jivan page-img.jpg"
import image3 from "./../images/jivan page-img3.jpg"
import lockImage from "./../images/lockImage.jpg"
import personImage from "./../images/personImage.png"
import pcImage from "./../images/pcImage.png"
import marrycup from "./../images/cuppppples.jpg"
import cuplemerry from "./../images/Cupplemrry.jpg"
import marryCp from "./../images/mrryCp.jpg"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded'



import "./Home.css"
import Register from './Register'
export default function Home() {
    return <>
        <div className='bgImage' >
            <div className="container d-none  d-sm-none d-md-block d-lg-block d-xl-block ">
                <div className="row justify-content-end">
                    <div className="col-4 offset-4">
                        <div className="card  text-light signcardDiv" >
                            <div className="card-header bg-white text-secondary">
                                <h1 className='RFree'>Registeretion Free</h1>

                            </div>
                            <div className="card-body">
                                <Register />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div className="colorfaint ps-4">
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className='d-flex justify-content-between gap-2'>
                            <div className="card mt-5 mb-5">
                                <div className="card-body text-center colorfaint ">

                                    <p className=''><img src={pcImage} height={120} className="colorfaint" alt="" /></p>

                                    <strong className='text-primary-emphasis'>Lakhs of Genuine Members</strong>
                                    <p>Search by location, community, profession & more. Get matches on email as per your preferences.</p>

                                </div>
                            </div>
                            <Divider orientation="vertical" />
                            <div className="card mt-5 mb-5">
                                <div className="card-body text-center colorfaint">
                                    <p className=''><img src={personImage} height={120} className="colorfaint" alt="" /></p>
                                    <strong className='text-primary-emphasis'>Lakhs of Genuine Members</strong>
                                    <p>Search by location, community, profession & more. Get matches on email as per your preferences.</p>

                                </div>

                            </div>
                            <div className="card mt-5 mb-5">

                                <div className="card-body text-center colorfaint ">
                                    <p className=''><img src={lockImage} height={120} className="colorfaint" alt="" /></p>

                                    <strong className='text-primary-emphasis'>Lakhs of Genuine Members</strong>
                                    <p className=''>Search by location, community, profession & more. Get matches on email as per your preferences.</p>

                                </div>



                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>

        {/* ////images/// */}
        <div className='ss1'>
            <Container>
                <Row>
                    <Col sx={12}>
                        <div className='match'>

                            <h1>Matched By Jeevansathi</h1>
                        </div>
                        <div className='d-flex justify-content-center gap-5' >
                            <p><img src={image1} alt="img-1" className=' imgEffect' /></p>

                            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <p><img src={image1} alt="" className=' imgEffect' /></p>
                                    </div>
                                    <div className="carousel-item">
                                        <p><img src={image2} alt="" className='imgEffect' /></p>
                                    </div>
                                    <div className="carousel-item">
                                        <p><img src={image3} alt="" className='imgEffect ' /></p>
                                    </div>
                                    <div className="carousel-item">
                                        <p><img src={marrycup} alt="" height={250} width={250} className='imgEffect' /></p>
                                    </div>
                                    <div className="carousel-item">
                                        <p><img src={cuplemerry} alt="" height={250} width={250} className='imgEffect' /></p>
                                    </div>
                                    <div className="carousel-item">
                                        <p><img src={marryCp} alt="" height={250} width={250} className='imgEffect' /></p>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p><img src={image2} alt="img-2" className='imgEffect' /></p>

                        </div>


                    </Col>

                </Row>
            </Container>
        </div>

        <div className='footerAboutBg mt-2 ps-4'>
            <div className=' footerAbout'>
                <h1 className=''>About Jeevansathi.com</h1>
            </div>
            <p>Jeevansathi.com is one of India’s leading matrimonial websites that has helped lakhs of members find their perfect life partner</p>
            <p> We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family. Each profile registered with us goes through a manual screening process before going live on site; we provide superior privacy controls for Free; and also verify contact information of members.</p>

            <p> You can register for Free and search according to your specific criteria on age, height, community, profession, income, location and much more- on your computer, tablet or mobile. Regular custom mails and notifications make the process easier and take you closer to your Jeevansathi!</p>

        </div>


        <div className='footerDiv'>
            <Container>
                <Row>

                    <Col sm={6}>
                        <div className='d-flex gap-2 '>


                            <span><a href="https://www.facebook.com/jeevansathi"><FacebookOutlinedIcon /></a></span>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <span><a href="https://twitter.com/jeevansathi_com" ><TwitterIcon /></a></span>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <span><a href='https://www.youtube.com/watch?v=oQtoz6xmKOg'><PlayCircleRoundedIcon /></a></span>
                        </div>

                    </Col>
                    <Col sm={6}>
                        <div className='d-flex gap-4 '>
                            <span>8756799283</span>
                            <span>JivanSathiOffice</span>
                            <span>jivansathi@gmail.com</span>


                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    </>
}
