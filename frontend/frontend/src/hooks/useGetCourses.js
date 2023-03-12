import axios from "axios";
import {onMounted, ref} from "vue";


export function useGetCourses(link) {
    const courses = ref([])
    const getCourses = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/listinfocourses/', {params: {programm: link}})
        courses.value = response.data
    }

    onMounted(getCourses)
    return {courses}
}