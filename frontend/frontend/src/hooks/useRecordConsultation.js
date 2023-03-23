import axios from 'axios'
import { ref } from 'vue'

export function postData() {
    const status = ref('')

    const firstname = {value: ref(''), maxLenght: '20', styleError: ref({})}
    const lastname = {value: ref(''), maxLenght: '20', styleError: ref({})}
    const email = {value: ref(''), maxLenght: '50', styleError: ref({})}
    const phone = {value: ref('+7'), maxLenght: '12', styleError: ref({}), minLength: '12'}
    const message = {value: ref(''), maxLenght: '2000'}

    async function consultationPost(){

        try {
            if (firstname.value.value && lastname.value.value && email.value.value) {
                const response = await axios.post('http://127.0.0.1:8000/api/v1/recordconsultationcreate/', {
                    'first_name': firstname.value.value,
                    'last_name': lastname.value.value,
                    'email': email.value.value,
                    'phone': phone.value.value,
                    'addition': message.value.value,
                })

                status.value = response.status
                firstname.value.value = ''
                lastname.value.value = ''
                email.value.value = ''
                phone.value.value = ''
                message.value.value = ''

                firstname.styleError.value = {}
                lastname.styleError.value = {}
                email.styleError.value = {}
                phone.styleError.value = {}
            }

            else {

                firstname.styleError.value = !firstname.value.value ? {'border': '1px solid red'} : {}
                lastname.styleError.value = !lastname.value.value ? {'border': '1px solid red'} : {}
                email.styleError.value = !email.value.value ? {'border': '1px solid red'} : {}
                phone.styleError.value = phone.value.value.length !== 12 ? {'border': '1px solid red'} : {}

            }
        }
        catch (e) {
            status.value = e.response.status
        }
    }


    return {status, firstname, lastname, email, phone, message, consultationPost}
}