import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Genre } from '@/views/auth/auth-types';
import type { IEditEleveDataInput } from '@/views/admin/eleves/elevesList/types/elevesList.types';

export const useEleveStore = defineStore('eleve', () => {
  const editEleveData = ref<IEditEleveDataInput>({
    id: null,
    prenom: '',
    nom: '',
    genre: Genre.Masculin,
    email: '',
    password: '',
    email_parent: '',
    nom_classe: '',

  })
  const editEleve = ref({
    edit: false
  })

  return { editEleveData, editEleve }
})
export const eleveStore = useEleveStore()
