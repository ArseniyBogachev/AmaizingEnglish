import axios from 'axios'

export const authUser = {
    state: () => ({
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
    },
    mutations:{
        updateVerify(state, verify){
            state.verify = verify
        },
        updateUser(state, user){
            state.user = user
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
        }
    }
}