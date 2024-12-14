<script setup lang="ts">
import HeaderComponent from "@/components/Header.vue";
import SidebarComponent from "@/components/Sidebar.vue"
import { getDevoirsAfaireHttp, type GetAfaireResponseType } from "./actions/getDevoirsAfaire";
import { ref, onMounted } from "vue";
import { soumettreDevoirHttp } from "./actions/soumettreDevoir";
import { confirmSoumission } from "@/helper/SweetAlert";
import { successMsg } from "@/helper/Toastnotification";

const devoirsAfaire = ref<GetAfaireResponseType | null>(null)

async function showDevoirsAfaire() {
  try {
    const data = await getDevoirsAfaireHttp();
    devoirsAfaire.value = data;
  } catch (error) {
    console.error("Erreur lors de la recuperation des devoirs.", error);
  }
}

async function handleSoumission(devoirId: number) {
  confirmSoumission().then(async () => {
    console.log('response.message')
    const response = await soumettreDevoirHttp(devoirId);
    await showDevoirsAfaire();
    successMsg(response.message)
  }).catch((error) => console.log(error))

}

onMounted(async () => {
  await showDevoirsAfaire()
})

</script>
<template>
  <div>
    <HeaderComponent />
    <SidebarComponent />
    <!-- <FooterComponent /> -->
  </div>
  <div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-sub-header">
              <h3 class="page-title">Bonjour Moussa</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Accueil</a>
                </li>
                <li class="breadcrumb-item active">Eleve</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card bg-comman w-100">
            <div class="card-body">
              <div class="db-widgets d-flex justify-content-between align-items-center">
                <div class="db-info">
                  <h6>Devoirs à faire</h6>
                  <h3>02</h3>
                </div>
                <div class="db-icon">
                  <img src="@/assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card bg-comman w-100">
            <div class="card-body">
              <div class="db-widgets d-flex justify-content-between align-items-center">
                <div class="db-info">
                  <h6>Soumis</h6>
                  <h3>2/4</h3>
                </div>
                <div class="db-icon">
                  <img src="@/assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card bg-comman w-100">
            <div class="card-body">
              <div class="db-widgets d-flex justify-content-between align-items-center">
                <div class="db-info">
                  <h6>Test Attended</h6>
                  <h3>30/50</h3>
                </div>
                <div class="db-icon">
                  <img src="@/assets/img/icons/student-icon-01.svg" alt="Dashboard Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
          <div class="card bg-comman w-100">
            <div class="card-body">
              <div class="db-widgets d-flex justify-content-between align-items-center">
                <div class="db-info">
                  <h6>Test Passed</h6>
                  <h3>15/20</h3>
                </div>
                <div class="db-icon">
                  <img src="@/assets/img/icons/student-icon-02.svg" alt="Dashboard Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
          <thead class="student-thread">
            <tr>
              <th>
                <div class="form-check check-tables">
                  <input class="form-check-input" type="checkbox" value="something" />
                </div>
              </th>
              <th>Matiere</th>
              <th>Lecon</th>
              <th>A rendre</th>
              <th>Consulter</th>
              <th>Soumettre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="devoir in devoirsAfaire?.devoirs" :key="devoir.devoir_id">
              <td>
                <div class="form-check check-tables">
                  <input class="form-check-input" type="checkbox" value="something" />
                </div>
              </td>
              <td>{{ devoir.matiere }}</td>
              <td>
                <h2>
                  <a>{{ devoir.module }}</a>
                </h2>
              </td>
              <td>{{ devoir.aRendre }}</td>
              <td>
                <button class="btn btn-primary">Voir le contenu</button>
              </td>
              <td>
                <button
                  class="btn btn-primary"
                  :disabled="devoir.soumis"
                  @click="handleSoumission(devoir.devoir_id)"
                >
                  {{ devoir.soumis ? "Déjà soumis" : "Soumettre" }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
