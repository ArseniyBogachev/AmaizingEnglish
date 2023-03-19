import { createStore } from 'vuex'
import {getData} from "@/store/modules/getData";
// import {userUpdate} from "@/store/modules/userUpdate";
import {authUser} from "@/store/modules/authUser";

export default createStore({
  modules: {
    getData: getData,
    // userUpdate: userUpdate,
    authUser: authUser,
  }
})
