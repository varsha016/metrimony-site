import { createSlice } from "@reduxjs/toolkit";
import addUserAction, { addUserAllDataAction, firstDataAction, getAllUserAction, secondDataAction, UserLoginAction } from "./userAction";
import UserRegisterwithLoginAction from "./userAction";


const userLoginData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : null


console.log(userLoginData);
const userSlice = createSlice({
    name: "users",
    initialState: { users: [], userLogin: userLoginData, x: {} },
    // initialState: { users: [], },
    reducers: {
        // removeuserAdded(state) {
        //     state.userAdded = false
        // },
        // resetUserError(state) {
        //     state.loginError = undefined
        // },
        // logout(state) {
        //     localStorage.removeItem("login")
        //     state.loginUser = null
        // }
    },
    extraReducers(builder) {
        builder
            .addCase(UserRegisterwithLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserRegisterwithLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(UserRegisterwithLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getAllUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getAllUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(UserLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userLogin = payload
            })
            .addCase(UserLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(firstDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.x = payload
            })
            .addCase(secondDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.x = { ...state.x, ...payload }
            })


            .addCase(addUserAllDataAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addUserAllDataAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userRegisterWithData = true
            })
            .addCase(addUserAllDataAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })




    }

})
export default userSlice.reducer
export const UsersData = state => state.allUsers
export const { removeuserAdded, resetUserError, logout } = userSlice.actions