import axios from "axios";
import {onMounted, ref} from "vue";

export function useGetProgramms() {
    const programms = ref([])
    const getProgramms = async () => {
        const response = await axios.get(`${process.env.VUE_APP_URL}/api/v1/listprogramms/`)
        programms.value = response.data
    }

    onMounted(getProgramms)
    return {programms}
}

