import { ref } from 'vue'

export function lstDocument() {
    const filePath = ref([])
    for (let i = 1; i <= 12; i++){
        if (i < 10) {
            filePath.value.push(`lstDocument/document-0${i}.png`)
        }
        else {
            filePath.value.push(`lstDocument/document-${i}.png`)
        }
    }
    return { filePath }
}