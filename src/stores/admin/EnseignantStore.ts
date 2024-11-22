import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IEditEnseignantDataInput } from '@/views/admin/enseignants/enseignantsList/types/enseignantsList.types'
import { Genre } from '@/views/auth/auth-types';

export const useEnseignantStore = defineStore('enseignant', () => {
  const editEnseignantData = ref<IEditEnseignantDataInput>({
    id: null,
    user_id: 0,
    prenom: '',
    nom: '',
    genre: Genre.Masculin,
    telephone: '',
    email: '',
    password: '',

  })
  const editEnseignant = ref({
    edit: false
  })

  return { editEnseignantData, editEnseignant }
})
export const enseignantStore = useEnseignantStore()
