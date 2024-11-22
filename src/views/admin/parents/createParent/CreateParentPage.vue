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
import type { ICreateParentInput } from './types/createParent.types'
import type { IUpdateParentInput } from './types/updateParent.types'
import { parentStore } from '@/stores/admin/parentStore'
import { createParentHttp } from './actions/CreateParent'
import { updateParentHttp } from './actions/UpdateParent'


const parentInput = ref<ICreateParentInput|IUpdateParentInput>({
  id: parentStore.editParentData.id,
  prenom: parentStore.editParentData.prenom,
  nom: parentStore.editParentData.nom,
  genre: parentStore.editParentData.genre,
  user_id: parentStore.editParentData.user_id,
  telephone: parentStore.editParentData.telephone,
  email: parentStore.editParentData.email,
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
  password: parentStore.editParent.edit ? {} : { required, minLength: minLength(8) },
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, parentInput)

const router = useRouter()

async function createOrUpdateParent() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    parentStore.editParent.edit
    ?await updateParent()
    :await createParent()

    v$.value.$reset()
    loadingStatus.value = false

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createParent(){
  const data = await createParentHttp(parentInput.value)
    // TYPE ASSERTION
    parentInput.value = {} as ICreateParentInput
    successMsg(data.message)
}

async function updateParent(){
  const data = await updateParentHttp(parentInput.value as IUpdateParentInput)
    // TYPE ASSERTION
    parentStore.editParentData = {} as IUpdateParentInput
    parentInput.value = {} as ICreateParentInput
    parentStore.editParent.edit = false
    router.push('/parents-list')
    successMsg(data.message)


}
</script>

<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Créer un compte parent {{ parentStore.editParentData}} </div>
        <div class="card-body">
          <form action="" @submit.prevent="createOrUpdateParent">
            <Error inputLabel="Prenom du parent" :formErrors="v$.prenom.$errors">
              <input type="text" v-model="parentInput.prenom" class="form-control" />
            </Error>

            <Error inputLabel="Nom du parent" :formErrors="v$.nom.$errors">
              <input type="text" v-model="parentInput.nom" class="form-control" />
            </Error>

            <Error inputLabel="Genre" :formErrors="v$.genre.$errors">
              <select v-model="parentInput.genre" id="genre" class="form-control">
                <option v-for="(value, key) in genre" :key="key" :value="value">
                  {{ value }}
                </option>
              </select>
            </Error>

            <Error inputLabel="Numero de telephone" :formErrors="v$.telephone.$errors">
              <input type="text" v-model="parentInput.telephone" class="form-control" />
            </Error>

            <Error inputLabel="Email" :formErrors="v$.email.$errors">
              <input type="email" v-model="parentInput.email" class="form-control" />
            </Error>

            <Error inputLabel="Mot de passe" v-if="!parentStore.editParent.edit" :formErrors="v$.password.$errors">
              <input type="password" v-model="parentInput.password" class="form-control" />
            </Error>

            <br />
            <RouterLink to="/parents-list">Voir la liste des parents</RouterLink>
            <br />
            <div class="form-group">
              <BaseBtn
              :class="parentStore.editParent.edit ? 'btn btn-warning' : 'btn btn-primary'"
              :label="parentStore.editParent.edit ? 'Modifier les informations du parent' : 'Creer un  compte parent'"
              :loading="loadingStatus" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>
