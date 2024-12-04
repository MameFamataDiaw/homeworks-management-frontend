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
import "../../../../assets/css/bootstrap-datetimepicker.min.css"
import "../../../../assets/plugins/select2/css/select2.min.css"
import "../../../../assets/plugins/select2/js/select2.min.js"
import "../../../../assets/plugins/moment/moment.min.js"
import "../../../../assets/js/bootstrap-datetimepicker.min.js"
const eleveInput = ref<ICreateEleveInput | IUpdateEleveInput>({
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
      ? await updateEleve()
      : await createEleve()

    v$.value.$reset()
    loadingStatus.value = false

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createEleve() {
  const data = await createEleveHttp(eleveInput.value)
  // TYPE ASSERTION
  eleveInput.value = {} as ICreateEleveInput
  successMsg(data.message)
}

async function updateEleve() {
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

  <div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col-sm-12">
            <div class="page-sub-header">
              <h3 class="page-title">Ajouter un eleve</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="students.html">Eleves</a>
                </li>
                <li class="breadcrumb-item active">Ajouter un eleve</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="card comman-shadow">
            <div class="card-body">
              <form @submit.prevent="createOrUpdateEleve">
                <div class="row">
                  <div class="col-12">
                    <h5 class="form-title student-info">
                      Student Information
                      <span><a href="javascript:;"><i class="feather-more-vertical"></i></a></span>
                    </h5>
                  </div>

                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Prenom de l'eleve" :formErrors="v$.prenom.$errors">
                        <input type="text" v-model="eleveInput.prenom" class="form-control" placeholder="Enter First Name" />
                      </Error>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Nom de l'eleve" :formErrors="v$.nom.$errors">
                        <input type="text" v-model="eleveInput.nom" class="form-control" placeholder="Enter First Name" />
                      </Error>
                    </div>
                  </div>

                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Genre" :formErrors="v$.genre.$errors">
                        <select v-model="eleveInput.genre" id="genre" class="form-control select">
                          <option v-for="(value, key) in genre" :key="key" :value="value">
                            {{ value }}
                          </option>
                        </select>
                      </Error>
                    </div>
                  </div>

                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Email" :formErrors="v$.email.$errors">
                        <input type="email" v-model="eleveInput.email" class="form-control" />
                      </Error>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Mot de passe" v-if="!eleveStore.editEleve.edit" :formErrors="v$.password.$errors">
                        <input type="password" v-model="eleveInput.password" class="form-control" />
                      </Error>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Email du parent" :formErrors="v$.email_parent.$errors">
                        <input type="email" v-model="eleveInput.email_parent" class="form-control" />
                      </Error>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <Error inputLabel="Classe" :formErrors="v$.nom_classe.$errors">
                        <input type="text" v-model="eleveInput.nom_classe" class="form-control" />
                      </Error>
                    </div>
                  </div>
                  <br />
                  <RouterLink to="/eleves-list">Voir la liste des eleves</RouterLink>
                  <br />
                  <!-- <div class="col-12 col-sm-4">
                    <div class="form-group local-forms">
                      <label>Class <span class="login-danger">*</span></label>
                      <select class="form-control select">
                        <option>Please Select Class</option>
                        <option>12</option>
                        <option>11</option>
                        <option>10</option>
                      </select>
                    </div>
                  </div> -->
                  <!-- <div class="col-12 col-sm-4">
                    <div class="form-group students-up-files">
                      <label>Upload Student Photo (150px X 150px)</label>
                      <div class="uplod">
                        <label class="file-upload image-upbtn mb-0">
                          Choose File <input type="file" />
                        </label>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-12">
                    <div class="student-submit">
                      <BaseBtn
                      :class="eleveStore.editEleve.edit ? 'btn btn-warning' : 'btn btn-primary'"
                      :label="eleveStore.editEleve.edit ? 'Modifier les informations de l\'eleve' : 'Creer un  compte eleve'"
                      :loading="loadingStatus" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row">
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
  </div> -->
</template>
