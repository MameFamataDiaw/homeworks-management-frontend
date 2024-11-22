<!-- eslint-disable @typescript-eslint/no-unused-expressions -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Error from '@/components/Error.vue'
import { showError, successMsg } from '@/helper/Toastnotification'
import BaseBtn from '@/components/BaseBtn.vue'
import { Genre } from '@/views/auth/auth-types'
import { eleveStore } from '@/stores/admin/eleveStore'
import { createEleveHttp } from './actions/CreateEleve'
import { updateEleveHttp } from './actions/UpdateEleve'
import type { ICreateEleveInput } from './types/createEleve.types'
import type { IUpdateEleveInput } from './types/updateEleve.types'


const eleveInput = ref<ICreateEleveInput|IUpdateEleveInput>({
  id: eleveStore.editEleveData.id,
  prenom: eleveStore.editEleveData.prenom,
  nom: eleveStore.editEleveData.nom,
  genre: eleveStore.editEleveData.genre,
  nom_classe: eleveStore.editEleveData.nom_classe,
  email_parent: eleveStore.editEleveData.email_parent,
  email: eleveStore.editEleveData.email,
  password: "",
});

// Extraire les valeurs de l'énumération pour le menu déroulant
const genre = Object.values(Genre);


const rules = {
  prenom: { required }, // Matches state.lastName
  nom: { required },
  email: { required, email },
  genre: { required },
  email_parent: { required, email },
  nom_classe: { required },
  password: eleveStore.editEleve.edit ? {} : { required, minLength: minLength(8) },
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, eleveInput)

const router = useRouter()

async function createOrUpdateEleve() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    eleveStore.editEleve.edit
    ?await updateEleve()
    :await createEleve()

    v$.value.$reset()
    loadingStatus.value = false

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createEleve(){
  const data = await createEleveHttp(eleveInput.value)
    // TYPE ASSERTION
    eleveInput.value = {} as ICreateEleveInput
    successMsg(data.message)
}

async function updateEleve(){
  const data = await updateEleveHttp(eleveInput.value as IUpdateEleveInput)
    // TYPE ASSERTION
    eleveStore.editEleveData = {} as IUpdateEleveInput
    eleveInput.value = {} as ICreateEleveInput
    eleveStore.editEleve.edit = false
    router.push('/eleves-list')
    successMsg(data.message)


}
</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Créer un compte eleve {{ eleveStore.editEleveData}} </div>
        <div class="card-body">
          <form action="" @submit.prevent="createOrUpdateEleve">
            <Error inputLabel="Prenom de l'eleve" :formErrors="v$.prenom.$errors">
              <input type="text" v-model="eleveInput.prenom" class="form-control" />
            </Error>

            <Error inputLabel="Nom de l'eleve" :formErrors="v$.nom.$errors">
              <input type="text" v-model="eleveInput.nom" class="form-control" />
            </Error>

            <Error inputLabel="Genre" :formErrors="v$.genre.$errors">
              <select v-model="eleveInput.genre" id="genre" class="form-control">
                <option v-for="(value, key) in genre" :key="key" :value="value">
                  {{ value }}
                </option>
              </select>
            </Error>

            <Error inputLabel="Email" :formErrors="v$.email.$errors">
              <input type="email" v-model="eleveInput.email" class="form-control" />
            </Error>

            <Error inputLabel="Mot de passe" v-if="!eleveStore.editEleve.edit" :formErrors="v$.password.$errors">
              <input type="password" v-model="eleveInput.password" class="form-control" />
            </Error>

            <Error inputLabel="Email du parent" :formErrors="v$.email_parent.$errors">
              <input type="email" v-model="eleveInput.email_parent" class="form-control" />
            </Error>

            <Error inputLabel="Nom de la classe" :formErrors="v$.nom_classe.$errors">
              <input type="text" v-model="eleveInput.nom_classe" class="form-control" />
            </Error>

            <br />
            <RouterLink to="/eleves-list">Voir la liste des eleves</RouterLink>
            <br />
            <div class="form-group">
              <BaseBtn
              :class="eleveStore.editEleve.edit ? 'btn btn-warning' : 'btn btn-primary'"
              :label="eleveStore.editEleve.edit ? 'Modifier les informations de l\'eleve' : 'Creer un  compte eleve'"
              :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
