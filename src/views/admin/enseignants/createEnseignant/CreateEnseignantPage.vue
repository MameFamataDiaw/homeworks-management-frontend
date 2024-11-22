<!-- eslint-disable @typescript-eslint/no-unused-expressions -->
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Error from '@/components/Error.vue'
import { showError, successMsg } from '@/helper/Toastnotification'
import BaseBtn from '@/components/BaseBtn.vue'
import { enseignantStore } from '@/stores/admin/EnseignantStore'
import type { ICreateEnseignantInput } from './types/createEnseignant.types'
import type { IUpdateEnseignantInput } from './types/updateEnseignant.types'
import { updateEnseignantHttp } from './actions/UpdateEnseignant'
import { createEnseignantHttp } from './actions/CreateEnseignant'
import { Genre } from '@/views/auth/auth-types'


const enseignantInput = ref<ICreateEnseignantInput|IUpdateEnseignantInput>({
  id: enseignantStore.editEnseignantData.id,
  prenom: enseignantStore.editEnseignantData.prenom,
  nom: enseignantStore.editEnseignantData.nom,
  genre: enseignantStore.editEnseignantData.genre,
  user_id: enseignantStore.editEnseignantData.user_id,
  telephone: enseignantStore.editEnseignantData.telephone,
  email: enseignantStore.editEnseignantData.email,
  password: "",
});

// Extraire les valeurs de l'énumération pour le menu déroulant
const genre = Object.values(Genre);


const rules = {
  prenom: { required }, // Matches state.lastName
  nom: { required },
  email: { required, email },
  genre: { required },
  telephone: { required },
  password: enseignantStore.editEnseignant.edit ? {} : { required, minLength: minLength(8) },
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, enseignantInput)

const router = useRouter()

async function createOrUpdateEnseignant() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    enseignantStore.editEnseignant.edit
    ?await updateEnseignant()
    :await createEnseignant()

    v$.value.$reset()
    loadingStatus.value = false

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createEnseignant(){
  const data = await createEnseignantHttp(enseignantInput.value)
    // TYPE ASSERTION
    enseignantInput.value = {} as ICreateEnseignantInput
    successMsg(data.message)
}

async function updateEnseignant(){
  const data = await updateEnseignantHttp(enseignantInput.value as IUpdateEnseignantInput)
    // TYPE ASSERTION
    enseignantStore.editEnseignantData = {} as IUpdateEnseignantInput
    enseignantInput.value = {} as ICreateEnseignantInput
    enseignantStore.editEnseignant.edit = false
    router.push('/enseignants-list')
    successMsg(data.message)


}
</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Créer une classe {{ enseignantStore.editEnseignantData}} </div>
        <div class="card-body">
          <form action="" @submit.prevent="createOrUpdateEnseignant">
            <Error inputLabel="Prenom de l'enseignant" :formErrors="v$.prenom.$errors">
              <input type="text" v-model="enseignantInput.prenom" class="form-control" />
            </Error>

            <Error inputLabel="Nom de l'enseignant" :formErrors="v$.nom.$errors">
              <input type="text" v-model="enseignantInput.nom" class="form-control" />
            </Error>

            <Error inputLabel="Genre" :formErrors="v$.genre.$errors">
              <select v-model="enseignantInput.genre" id="genre" class="form-control">
                <option v-for="(value, key) in genre" :key="key" :value="value">
                  {{ value }}
                </option>
              </select>
            </Error>

            <Error inputLabel="Numero de telephone" :formErrors="v$.telephone.$errors">
              <input type="text" v-model="enseignantInput.telephone" class="form-control" />
            </Error>

            <Error inputLabel="Email" :formErrors="v$.email.$errors">
              <input type="email" v-model="enseignantInput.email" class="form-control" />
            </Error>

            <Error inputLabel="Mot de passe" v-if="!enseignantStore.editEnseignant.edit" :formErrors="v$.password.$errors">
              <input type="password" v-model="enseignantInput.password" class="form-control" />
            </Error>

            <br />
            <RouterLink to="/enseignants-list">Voir la liste des enseignants</RouterLink>
            <br />
            <div class="form-group">
              <BaseBtn
              :class="enseignantStore.editEnseignant.edit ? 'btn btn-warning' : 'btn btn-primary'"
              :label="enseignantStore.editEnseignant.edit ? 'Modifier les informations de l\'enseignant' : 'Creer un  compte enseignant'"
              :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
