import axios from 'axios'

export const getData = {
    state: () => ({
        programms: [],
        courses: [],
        prices: [],
    }),
    getters:{
        programms(state){
            return state.programms
        },
        courses(state){
            return state.courses
        },
        prices(state){
            return state.prices
        },
    },
    mutations:{
        updateProgramms(state, programms){
            state.programms = programms
        },
        updateCourses(state, courses){
            state.courses = courses
        },
        updatePrices(state, prices){
            state.prices = prices
        },
    },
    actions: {
        async programms_data(ctx){
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/listprogramms/`)
                await ctx.commit('updateProgramms', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async courses_data(ctx, programm){
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/listinfocourses/`, {params: {'programm': programm}})
                await ctx.commit('updateCourses', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async prices_data(ctx){
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/listprices/`)
                await ctx.commit('updatePrices', response.data)
            }
            catch (e) {
                console.log(e)
            }
        }
    }
}