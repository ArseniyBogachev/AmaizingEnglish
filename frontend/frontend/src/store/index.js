import { createStore } from 'vuex'
import {getData} from "@/store/modules/getData";
import {authUser} from "@/store/modules/authUser";

export default createStore({
  modules: {
    getData: getData,
    authUser: authUser,
  }
})
