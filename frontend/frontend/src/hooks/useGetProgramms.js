import axios from "axios";
import {onMounted, ref} from "vue";

export function useGetProgramms() {
    const programms = ref([])
    const getProgramms = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/listprogramms/')
        programms.value = response.data
    }

    onMounted(getProgramms)
    return {programms}
}

