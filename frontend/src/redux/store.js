import { configureStore } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'
import userSlice from './User/userSlice'






const store = configureStore({
    reducer: {
        allUsers: userSlice,

    }
})
export default store