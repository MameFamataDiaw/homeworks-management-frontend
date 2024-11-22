import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Genre } from '@/views/auth/auth-types';
import type { IEditParentDataInput } from '@/views/admin/parents/parentsList/types/parentsList.types';

export const useParentStore = defineStore('parent', () => {
  const editParentData = ref<IEditParentDataInput>({
    id: null,
    user_id: 0,
    prenom: '',
    nom: '',
    genre: Genre.Masculin,
    telephone: '',
    email: '',
    password: '',

  })
  const editParent = ref({
    edit: false
  })

  return { editParentData, editParent }
})
export const parentStore = useParentStore()
