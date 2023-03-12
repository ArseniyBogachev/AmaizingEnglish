import { createStore } from 'vuex'
import {getData} from "@/store/modules/getData";
import {postData} from "@/store/modules/postData";

export default createStore({
  modules: {
    getData: getData,
    postData: postData,
  }
})
