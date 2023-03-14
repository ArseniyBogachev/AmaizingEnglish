import { createStore } from 'vuex'
import {getData} from "@/store/modules/getData";
import {postData} from "@/store/modules/postData";
import {authUser} from "@/store/modules/authUser";

export default createStore({
  modules: {
    getData: getData,
    postData: postData,
    authUser: authUser,
  }
})
