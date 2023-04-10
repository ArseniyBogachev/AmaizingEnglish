import axios from 'axios'

export const getData = {
    state: () => ({
        programms: [],
        courses: [],
        prices: [],
        options_courses: [
            {'name': 'Выберите курс', 'value': 'Default'},
        ],
        options_prices: [
            {'name':'Выберите цену', 'value':'Default'},
        ],
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
        options_courses(state){
            return state.options_courses
        },
        options_prices(state){
            return state.options_prices
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
        updateOptionsCourses(state){
            state.options_courses = [
                {'name': 'Выберите курс', 'value': 'Default'},
            ]
            for (let i of state.courses) {
              state.options_courses.push(
                {'name': i.title_level, 'value': i.id}
              )
            }
        },
        updateOptionsPrices(state, context){
            state.options_prices = [
                {'name':'Выберите цену', 'value':'Default'},
            ]
            for (let i of state.prices){
              if (i.title === context.priceTitle || (i.type_programm === context.priceTitle && i.title === context.radioAgeActive)){
                for (let j of i.list_type_class){
                  if (j.title.indexOf(context.typeClass) > -1 || (j.title.indexOf(context.selectedCourses) > -1 && context.typeClass !== 'Индивидуальные')){
                    for (let z of j.list_type_courses){
                      state.options_prices.push(
                        {'name': `${z.title}: ${z.full_price} руб.`, 'value': z.id}
                      )
                    }
                  }
                }
              }
            }
        },
    },
    actions: {
        async programms_data(ctx){
            try{
                const response = await axios.get(`${process.env.VUE_APP_URL}/api/v1/listprogramms/`)
                await ctx.commit('updateProgramms', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async courses_data(ctx, programm){
            try{
                const response = await axios.get(`${process.env.VUE_APP_URL}/api/v1/listinfocourses/`, {params: {'programm': programm}})
                await ctx.commit('updateCourses', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async prices_data(ctx){
            try{
                const response = await axios.get(`${process.env.VUE_APP_URL}/api/v1/listprices/`)
                await ctx.commit('updatePrices', response.data)
            }
            catch (e) {
                console.log(e)
            }
        }
    }
}