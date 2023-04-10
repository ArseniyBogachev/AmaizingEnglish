import axios from "axios";
import {onMounted, ref} from "vue";


export function useGetCourses(link) {
    const courses = ref([])
    const getCourses = async () => {
        const response = await axios.get(`${process.env.VUE_APP_URL}/api/v1/listinfocourses/`, {params: {programm: link}})
        courses.value = response.data
    }

    onMounted(getCourses)
    return {courses}
}