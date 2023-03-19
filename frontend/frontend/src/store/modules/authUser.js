import axios from 'axios'

export const authUser = {
    state: () => ({
        programm_error: {},
        price_error: {},
        verify: false,
        user: {},
    }),
    getters:{
        verify(state){
            return state.verify
        },
        user(state){
            return state.user
        },
        programm_error(state){
            return state.programm_error
        },
        price_error(state){
            return state.price_error
        },
    },
    mutations:{
        updateVerify(state, verify){
            state.verify = verify
        },
        updateUser(state, user){
            state.user = user
        },
        programmErrorUpdate(state, error){
            state.programm_error = error
        },
        priceErrorUpdate(state, error){
            state.price_error = error
        },
    },
    actions: {
        async verify_fn(ctx){
            try {
                if (localStorage.getItem("access")){
                    await axios.post(`http://127.0.0.1:8000/api/token/verify/`, {token: `${localStorage.getItem("access")}`})
                    await ctx.commit('updateVerify', true)
                }
            }
            catch (e){
                ctx.dispatch('refresh_fn')
            }
        },
        async refresh_fn(ctx){
            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/token/refresh/`, {"refresh": `${localStorage.getItem("refresh")}`})
                await localStorage.setItem('access', response.data.access)
                await ctx.commit('updateVerify', true)
                await ctx.dispatch('user_data')
            }
            catch (e){
                ctx.commit('updateVerify', false)
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
            }
        },
        async user_data(ctx){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/v1/user/', {headers: {"Authorization" : `Bearer ${localStorage.getItem('access')}`}})
                ctx.commit('updateUser', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async user_courses_update(ctx, data){
            try{
                if (data.programm !== 'Default' && data.price !== 'Default'){
                    const response = await axios.patch('http://127.0.0.1:8000/api/v1/usercoursesupdate/',
                        {'programm': data.programm, 'price': data.price},
                        {headers: {"Authorization" : `Bearer ${localStorage.getItem('access')}`}}
                    )
                    ctx.commit('updateUser', response.data)
                    ctx.commit('priceErrorUpdate', {})
                    ctx.commit('programmErrorUpdate', {})
                    location.reload()
                }
                else{
                    if (data.programm === 'Default'){
                        ctx.commit('programmErrorUpdate', {border: '1px solid #9c2632'})
                    }
                    if (data.price === 'Default'){
                        ctx.commit('priceErrorUpdate', {border: '1px solid #9c2632'})
                    }
                }
            }
            catch (e) {
                console.log(e)
            }
        }
    }
}