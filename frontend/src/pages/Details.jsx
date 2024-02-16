import { Drawer, Grid, Paper, Button, Typography, Stack, Box, Avatar, } from '@mui/material'

import React from 'react'
import { FiMessageSquare } from 'react-icons/fi';
import { BsStar, BsTelephoneOutbound, BsChat } from 'react-icons/bs';
// import { BsStar } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import { json } from 'react-router-dom'



export default function Details({ props }) {
    const { users, userLogin } = useSelector(state => state.allUsers)
    var items = [
        {
            name: "Damaka Offers",
            description: "Probably the most random thing you have ever seen!",
            images: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/isha_anand_sharma_gets_married_to_vasdev_singh_jasrotia.jpg"
        },
        {
            name: "Your Offers",
            description: "Hello EveryOne!",
            images: "https://1.bp.blogspot.com/-yZmXAvYHLhU/X55LvwU9S7I/AAAAAAAAggY/emyv3H99a-ctDb1Ib_-jrLNMFIXhfKi4wCLcBGAsYHQ/s1350/Beautiful%2BMarried%2BCouple%2B2020%2B%25284%2529.jpg",

        },
        {
            name: "food sel",
            description: "Hello !",
            images: "https://cdn0.weddingwire.in/article/3939/3_2/1280/jpg/79393-tips-to-wear-family-heirlooms-in-your-intimate-wedding-house-on-the-clouds-lead-image.webp",

        },
    ]


    return <>

        <pre>{JSON.stringify(users, null, 2)}</pre>

        (
        <Carousel>
            {
                items.map((item, i) => <Box key={i} item={item} ></Box>)
            }
        </Carousel>
        )

        <Grid Grid container spacing={2}>
            <Grid item xs={8}>
                <Grid Grid container spacing={2}>
                    <hr />
                    {
                        users.map((user, index) => <>
                            <Grid item xs={4}>
                                <Stack sx={{ margin: "2%" }}>

                                    {user.avatar.map(img => <>
                                        <img src={`http://localhost:5000/${img}`} alt="myAvatar" style={{ width: 200, height: 200 }} />
                                        <h5 style={{
                                            height: "30px", width: "200px",
                                            backgroundColor: "#607d8b",
                                            display: "flex",
                                            justifyContent: "center", color: "lightcyan"
                                        }}>jiya Rathod</h5>
                                    </>)}
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ backgroundColor: "crimson", }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 5,
                                    }}>
                                        <div>
                                            <p>hello</p>
                                            <p>hello2</p>
                                        </div>
                                        <div>
                                            <p>hello</p>
                                            <p>hello2</p>
                                        </div>
                                    </Box>

                                </Box>

                            </Grid >
                            <Grid item xs={4}>
                                <Stack>
                                    <Box sx={{ backgroundColor: "#607d8b", color: "lightpink" }} >
                                        <p style={{ margin: "4%", fontSize: "20px" }}> <FiMessageSquare /> <span style={{ padding: "10px" }}>Send Interest</span></p>
                                        <p style={{ margin: "4%", fontSize: "20px" }}> <BsChat /> <span style={{ padding: "10px" }}>Chat</span> </p>
                                        <p style={{ margin: "4%", fontSize: "20px" }}> <BsTelephoneOutbound /> <span style={{ padding: "10px" }}>Contact Us</span> </p>
                                        <p style={{ margin: "4%", fontSize: "20px" }}> <BsStar /> <span style={{ padding: "10px" }}>Short List</span> </p>

                                    </Box>


                                </Stack>
                            </Grid>
                        </>
                        )
                    }




                </Grid>
            </Grid>
            <Grid item xs={4}>
                {/* <h1>HELLO</h1> */}
            </Grid>
        </Grid >



    </>
}

// function Item(props) {
//     return (
//         < Paper >
//             {/* <h2>{props.item.name}</h2> */}
//             {/* <p>{props.item.description}</p> */}

//             <img src={props.item.images} alt="offers" />

//             {/* <Button className="CheckButton">
//                 Check it out!
//             </Button> */}
//         </ Paper >
//     )
// }