import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEditDevoirDataInput } from '@/views/enseignants/devoirs/devoirsList/types/devoirsList.types'

export const useDevoirStore = defineStore('devoir', () => {
  const editDevoirData = ref<IEditDevoirDataInput>({
    id: null,
    module: '',
    contenu: '',
    document: '',
    matiere_id: 0,
    dateAjout: undefined
  })
  const editDevoir = ref({
    edit: false
  })

  return { editDevoirData, editDevoir }
})
export const devoirStore = useDevoirStore()
