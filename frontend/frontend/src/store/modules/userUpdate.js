import axios from 'axios'

// export const userUpdate = {
//     state: () => ({
//         options_courses: [
//             {'name': 'Выберите курс', 'value': 'Default'},
//         ],
//         options_prices: [
//             {'name':'Выберите цену', 'value':'Default'},
//         ],
//     }),
//     getters:{
//         options_courses(state){
//             return state.options_courses
//         },
//         options_prices(state){
//             return state.options_prices_PricesApp
//         },
//     },
//     mutations:{
//         updateOptionsCourses(state){
//             state.options_courses = [
//                 {'name': 'Выберите курс', 'value': 'Default'},
//             ]
//             for (let i of state.courses) {
//               state.options_courses.push(
//                 {'name': i.title_level, 'value': i.id}
//               )
//             }
//         },
//         updateOptionsPrices(state, context){
//             state.options_prices_PricesApp = [
//                 {'name':'Выберите цену', 'value':'Default'},
//             ]
//             console.log(state.prices)
//             for (let i of state.prices){
//               if (i.title === context.priceTitle || (i.type_programm === context.priceTitle && i.title === context.radioAgeActive)){
//                 for (let j of i.list_type_class){
//                   if (j.title.indexOf(context.typeClass) > -1 || (j.title.indexOf(context.selectedCourses) > -1 && context.typeClass !== 'Индивидуальные')){
//                     for (let z of j.list_type_courses){
//                       state.options_prices_PricesApp.push(
//                         {'name': `${z.title}: ${z.full_price} руб.`, 'value': z.id}
//                       )
//                     }
//                   }
//                 }
//               }
//             }
//         },
//     },
//     actions: {
//
//     }
// }