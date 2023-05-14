import { createSlice } from '@reduxjs/toolkit'
import { BASE_URLAPI } from '../views/constant'
import axios from 'axios'
export const initialState = {
    educatorAllCourse: {}
}

const educatorAllCourseSlice = createSlice({
    name: 'educatorAllCourse',
    initialState,
    reducers: {
        geteducatorAllCourse: (state, { payload }) => {
            state.educatorAllCourse = payload
        },


    },
})

export const { geteducatorAllCourse } = educatorAllCourseSlice.actions
export const educatorAllCourseSelector = state => state.educatorAllCourse
export default educatorAllCourseSlice.reducer


export function getcourselistEducatorApi(payload) {
    // console.log(payload,"payloadpayload")
    return async dispatch => {
        try {

            const response = await axios({
                method: "get",
                url: `${BASE_URLAPI}` + "course/session/getCourseByEducator/"+payload,
            })
            console.log(response,"getcourselistEducatorApi")
            dispatch(geteducatorAllCourse(response))
            // dispatch(fetchcart(payload.token))
        }
        catch (err) {
            console.log("errorgetbanners", err)
        }
    }
}