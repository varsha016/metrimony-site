import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";


const UserRegisterwithLoginAction = createAsyncThunk("Users/adds", async (addData, { getState, rejectWithValue }) => {
    try {

        const { data: { result } } = await api.post("/user/add", addData)
        localStorage.setItem("login", JSON.stringify(result))
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})
export const firstDataAction = createAsyncThunk("first/added", (firstFrom, { getState, rejectWithValue }) => {
    console.log(firstFrom);
    return firstFrom
})
export const secondDataAction = createAsyncThunk("second/added", (secondFrom, { getState, rejectWithValue }) => {
    console.log(secondFrom);
    return secondFrom
})

export const addUserAllDataAction = createAsyncThunk("User/allDataAdd", async (addData, { getState, rejectWithValue }) => {
    try {
        console.log(addData);
        const { data: { result } } = await api.post("/user/add-all/info", addData, {
            headers: {
                authorization: getState().allUsers.userLogin.token
            }
        })
        console.log(result);
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const getAllUserAction = createAsyncThunk("Users/get", async (x, { getState, rejectWithValue }) => {
    try {
        const { data: { result } } = await api.get("/user", {
            headers: {
                authorization: getState().allUsers.userLogin.token
            }
        })
        // console.log(result);
        console.log(result.result1);
        return result.result1

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const UserLoginAction = createAsyncThunk("loginUsers/post", async (logindata, { rejectWithValue, getState }) => {
    try {

        const { data: { result } } = await api.post("/auth/login", logindata)


        if (result) {
            localStorage.setItem("login", JSON.stringify(result))
            return result
        } else {

            return result ? result : rejectWithValue("email or password wrong")
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export default UserRegisterwithLoginAction