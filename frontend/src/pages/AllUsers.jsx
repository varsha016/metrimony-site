import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAction } from '../redux/User/userAction'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function AllUsers() {
    const dispatch = useDispatch()
    const { users, userLogin, userRegisterWithData } = useSelector(state => state.allUsers)
    useEffect(() => {
        if (userRegisterWithData || userLogin) {

            dispatch(getAllUserAction())
        }
    }, [userRegisterWithData, userLogin])

    if (!userRegisterWithData) return "unable"
    return (<>
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(userLogin, null, 2)}</pre> */}


        {users && users.map(item => <>
            <Card>
                <CardContent>
                    <p>{item.gender}</p>
                </CardContent>
            </Card>

            {item.avatar.map(img => <Card sx={{
                display: 'flex',
                width: "50%",
                margin: "8px",
                backgroundColor: "ButtonShadow"
            }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`http://localhost:5000/${img}`}
                    alt={img}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <p>{userLogin.name}</p>
                        <p>{userLogin.profile}</p>
                        <p>{userLogin.email}</p>
                        <p>{userLogin.contact}</p>

                        <p>{userLogin.pin}</p>
                        <Link className='nav-link' to="/details"> <Button variant="contained" color="success" >View Details</Button> </Link>

                    </CardContent>

                </Box>

            </Card>)}


        </>)}



    </>
    )
}

export default AllUsers