import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEditClasseDataInput } from '@/views/admin/classesList/types/classesList-types'

export const useClasseStore = defineStore('classe', () => {
  const editClasseData = ref<IEditClasseDataInput>({
    id: null,
    nomClasse: '',
    niveau: '',
  })
  const editClasse = ref({
    edit: false
  })

  return { editClasseData, editClasse }
})
export const classeStore = useClasseStore()
