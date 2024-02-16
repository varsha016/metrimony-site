import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Protected({ compo }) {
    const { userLogin, userRegisterWithData } = useSelector(state => state.allUsers)
    return userRegisterWithData ? compo : <Navigate to="/login" />
}
