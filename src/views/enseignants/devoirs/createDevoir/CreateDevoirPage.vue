<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import HeaderComponent from "@/components/Header.vue";
import SidebarComponent from "@/components/Sidebar.vue"
import { showError, successMsg } from "@/helper/Toastnotification";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import BaseBtn from '@/components/BaseBtn.vue';
import Error from '@/components/Error.vue';
import type { ICreateDevoirInput, IUpdateDevoirInput } from "./types/CreateOrUpdateDevoir.types";
import { devoirStore } from "@/stores/enseignant/devoirStore";
import { createDevoirHttp } from "./actions/CreateDevoir";
import { updateDevoirHttp } from "./actions/UpdateDevoir";
import { GetMatieresByClasseHttp, type GetMatieresResponseType } from "@/views/admin/matieresList/actions/GetMatieresList";

const matieres = ref<GetMatieresResponseType>();
const currentPage = ref(1)
const searchQuery  = ref("");

const devoirInput = ref<ICreateDevoirInput | IUpdateDevoirInput>({
  id: devoirStore.editDevoirData.id,
  module: devoirStore.editDevoirData.module,
  contenu: devoirStore.editDevoirData.contenu,
  document: devoirStore.editDevoirData.document,
  matiere_id: devoirStore.editDevoirData.matiere_id
})

const rules = {
  module: { required }, // Matches state.lastName
  contenu: { required },
  matiere_id: { required, }
}

const loadingStatus = ref(false)

const v$ = useVuelidate(rules, devoirInput)

const router = useRouter()

async function fetchMatieres() {
  try {
    const data = await GetMatieresByClasseHttp(currentPage.value, searchQuery.value);
    matieres.value = data;
  } catch (error:any) {
    showError(error.message);
  }
}

async function CreateOrUpdateDevoir() {
  const result = await v$.value.$validate()
  if (!result) return

  try {
    loadingStatus.value = true

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    devoirStore.editDevoir.edit ?
      await updateDevoir() :
      await createDevoir()

    v$.value.$reset()
    loadingStatus.value = false

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    loadingStatus.value = false
    showError(error.message)
  }

}
async function createDevoir() {
  const data = await createDevoirHttp(devoirInput.value)
  // TYPE ASSERTION
  devoirInput.value = {} as ICreateDevoirInput
  successMsg(data.message)
  window.location.href="/devoirs-list"
}

async function updateDevoir() {
  const data = await updateDevoirHttp(devoirInput.value as IUpdateDevoirInput)
  // TYPE ASSERTION
  devoirStore.editDevoirData = {} as IUpdateDevoirInput
  devoirInput.value = {} as ICreateDevoirInput
  devoirStore.editDevoir.edit = false
  router.push('/devoirs-list')
  successMsg(data.message)


}
onMounted(async () => {
  await fetchMatieres();
})

</script>
<template>

  <HeaderComponent />
  <SidebarComponent />
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Ajouter un devoir</h5>
              </div>
              <div class="card-body">
                <form action="" @submit.prevent="CreateOrUpdateDevoir()">
                  <div class="form-group row">
                    <Error inputLabel="Selectionner la matiere" :formErrors="v$.matiere_id.$errors">
                      <div class="col-md-10">
                        <select v-model="devoirInput.matiere_id" class="form-control form-select">
                          <option value="" disabled>-- Sélectionnez une matiere --</option>
                          <option v-for="matiere in matieres?.data" :key="matiere.id" :value="matiere.id">
                            {{ matiere.nomMatiere }}
                          </option>
                        </select>
                      </div>
                    </Error>

                  </div>
                  <div class="form-group row">
                    <Error inputLabel="Module" :formErrors="v$.module.$errors">
                      <div class="col-md-10">
                        <input type="text" v-model="devoirInput.module" class="form-control" />
                      </div>
                    </Error>
                  </div>

                  <div class="form-group row">
                    <Error inputLabel="Joindre un fichier" :formErrors="v$.module.$errors">
                      <div class="col-md-10">
                        <input class="form-control" type="file" />
                      </div>
                    </Error>
                  </div>

                  <div class="form-group row">
                    <Error inputLabel="Ajouter le contenu" :formErrors="v$.contenu.$errors">
                      <div class="col-md-10">
                        <textarea rows="5" cols="5" v-model="devoirInput.contenu" class="form-control"></textarea>
                      </div>
                    </Error>
                  </div>

                  <div class=" blog-categories-btn pt-0">
                    <!-- <a href="blog.html" class="btn bank-cancel-btn me-2">Creer le devoir</a>-->
                    <BaseBtn :class="devoirStore.editDevoir.edit ? 'btn btn-warning' : 'btn btn-primary'"
                      :label="devoirStore.editDevoir.edit ? 'Modifier le devoir' : 'Creer un devoir'"
                      :loading="loadingStatus" />
                    <!-- <div class="bank-details-btn ">
                      <RouterLink to="/devoirs-list" class="btn bank-cancel-btn me-2">Retour a la liste</RouterLink>
                    </div> -->
                  </div>
                </form>
              </div>

              <div class=" blog-categories-btn pt-0">
                <div class="bank-details-btn ">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
