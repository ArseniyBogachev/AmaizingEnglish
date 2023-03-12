import axios from 'axios'

export const postData = {
    state: () => ({
        // programms: [],
    }),
    getters:{
        // programms(state){
        //     return state.programms
        // },
    },
    mutations:{
        // updateCourses(state, courses){
        //     state.courses = courses
        // },
    },
    actions: {
        // async programms_data(ctx){
        //     try{
        //         const response = await axios.get(`http://127.0.0.1:8000/api/v1/listprogramms/`)
        //         await ctx.commit('updateProgramms', response.data)
        //     }
        //     catch (e) {
        //         console.log(e)
        //     }
        // },
    }
}