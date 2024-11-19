<!-- eslint-disable @typescript-eslint/no-unused-expressions -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Error from '@/components/Error.vue'
import type { ICreateClasseInput } from './types/createClasse.types'
import { createClasseHttp } from '@/views/admin/createClasse/actions/CreateClasse'

import { showError, successMsg } from '@/helper/Toastnotification'
import BaseBtn from '../../../components/BaseBtn.vue'
import { classeStore } from '@/stores/admin/classeStore'
import { updateClasseHttp } from './actions/UpdateClasse'
import type { IUpdateClasseInput } from './types/updateClasse-types'


const classeInput = ref<ICreateClasseInput|IUpdateClasseInput>({
  id:classeStore.editClasseData.id,
  nomClasse: classeStore.editClasseData.nomClasse,
  niveau: classeStore.editClasseData.niveau,
})

const rules = {
  nomClasse: { required }, // Matches state.lastName
  niveau: { required }
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, classeInput)

const router = useRouter()

async function createOrUpdateClasse() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    classeStore.editClasse.edit ?
    await updateClasse() :
    await createClasse()

    v$.value.$reset()
    loadingStatus.value = false

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createClasse(){
  const data = await createClasseHttp(classeInput.value)
    // TYPE ASSERTION
    classeInput.value = {} as ICreateClasseInput
    successMsg(data.message)
}

async function updateClasse(){
  const data = await updateClasseHttp(classeInput.value as IUpdateClasseInput)
    // TYPE ASSERTION
    classeStore.editClasseData = {} as IUpdateClasseInput
    classeInput.value = {} as ICreateClasseInput
    classeStore.editClasse.edit = false
    router.push('/classes-list')
    successMsg(data.message)


}
</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Créer une classe {{ classeStore.editClasseData}} </div>
        <div class="card-body">
          <form action="" @submit.prevent="createOrUpdateClasse">
            <Error inputLabel="Nom de la classe" :formErrors="v$.nomClasse.$errors">
              <input type="text" v-model="classeInput.nomClasse" class="form-control" />
            </Error>

            <Error inputLabel="Niveau de la classe" :formErrors="v$.niveau.$errors">
              <input type="text" v-model="classeInput.niveau" class="form-control" />
            </Error>

            <br />
            <RouterLink to="/classes-list">Voir la liste des classes</RouterLink>
            <br />
            <div class="form-group">
              <BaseBtn
              :class="classeStore.editClasse.edit ? 'btn btn-warning' : 'btn btn-primary'"
              :label="classeStore.editClasse.edit ? 'Modifier classe' : 'Creer une classe'"
              :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
