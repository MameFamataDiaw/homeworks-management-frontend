import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEditMatiereDataInput } from '@/views/admin/matieresList/types/matieresList-types'

export const useMatiereStore = defineStore('matiere', () => {
  const editMatiereData = ref<IEditMatiereDataInput>({
    id: null,
    nomMatiere: '',
  })
  const editMatiere = ref({
    edit: false
  })

  return { editMatiereData, editMatiere }
})
export const matiereStore = useMatiereStore()
