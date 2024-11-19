<!-- eslint-disable @typescript-eslint/no-unused-expressions -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Error from '@/components/Error.vue'
import type { ICreateMatiereInput } from './types/createMatiere-types'
import { createMatiereHttp } from '@/views/admin/createMatiere/actions/CreateMatiere'

import { showError, successMsg } from '@/helper/Toastnotification'
import BaseBtn from '../../../components/BaseBtn.vue'
import { matiereStore } from '@/stores/admin/matiereStore'
import { updateMatiereHttp } from './actions/updateMatiere'
import type { IUpdateMatiereInput } from './types/updateMatiere-types'


const matiereInput = ref<ICreateMatiereInput|IUpdateMatiereInput>({
  id:matiereStore.editMatiereData.id,
  nomMatiere: matiereStore.editMatiereData.nomMatiere,
})

const rules = {
  nomMatiere: { required }, // Matches state.lastName
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, matiereInput)

const router = useRouter()

async function createOrUpdateMatiere() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    matiereStore.editMatiere.edit ?
    await updateMatiere() :
    await createMatiere()

    v$.value.$reset()
    loadingStatus.value = false

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createMatiere(){
  const data = await createMatiereHttp(matiereInput.value)
    // TYPE ASSERTION
    matiereInput.value = {} as ICreateMatiereInput
    successMsg(data.message)
}

async function updateMatiere(){
  const data = await updateMatiereHttp(matiereInput.value as IUpdateMatiereInput)
    // TYPE ASSERTION
    matiereStore.editMatiereData = {} as IUpdateMatiereInput
    matiereInput.value = {} as ICreateMatiereInput
    matiereStore.editMatiere.edit = false
    router.push('/matieres-list')
    successMsg(data.message)


}
</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Créer une matiere {{ matiereStore.editMatiereData}} </div>
        <div class="card-body">
          <form action="" @submit.prevent="createOrUpdateMatiere">
            <Error inputLabel="Nom de la matiere" :formErrors="v$.nomMatiere.$errors">
              <input type="text" v-model="matiereInput.nomMatiere" class="form-control" />
            </Error>

            <br />
            <RouterLink to="/matieres-list">Voir la liste des matieres</RouterLink>
            <br />
            <div class="form-group">
              <BaseBtn
              :class="matiereStore.editMatiere.edit ? 'btn btn-warning' : 'btn btn-primary'"
              :label="matiereStore.editMatiere.edit ? 'Modifier classe' : 'Creer une classe'"
              :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
