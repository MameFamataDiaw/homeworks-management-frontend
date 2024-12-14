<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
  import { getSoumissionsHttp, type GetSoumissionsResponseType } from "./actions/soumissions";
  import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

  const route = useRoute();
  const devoirId = ref<number>(parseInt(route.params.devoirId as string));
  const soumissions = ref<GetSoumissionsResponseType>()

  async function showSoumissions(){
    try {
      const data = await getSoumissionsHttp(devoirId.value);
      soumissions.value = data;
    } catch (error) {
      console.error("Erreur lors de la récupération de la liste des soumissions :", error);
    }
  }

  onMounted(() => {
    showSoumissions();
  }
);

</script>
<template>
  <div>
    <HeaderComponent />
    <SidebarComponent />
    <!-- <FooterComponent /> -->
  </div>

  <div class="main-wrapper">
    <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Ma classe</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Classe</a>
                  </li>
                  <li class="breadcrumb-item active">CE1 A</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card card-table">
                <div class="card-body">
                  <div class="page-header">
                    <div class="row align-items-center">
                      <div class="col">
                        <h3 class="page-title">Soumissions pour le devoir #{{ devoirId }}</h3>
                      </div>
                      <!-- <div
                        class="col-auto text-end float-end ms-auto download-grp"
                      >
                        <a href="#" class="btn btn-outline-primary me-2"
                          ><i class="fas fa-download"></i> Download</a
                        >
                        <a href="add-exam.html" class="btn btn-primary"
                          ><i class="fas fa-plus"></i
                        ></a>
                      </div> -->
                    </div>
                  </div>

                  <div class="table-responsive">
                    <table
                      class="table border-0 star-student table-hover table-center mb-0 datatable table-striped"
                    >
                      <thead class="student-thread">
                        <tr>
                          <th>ID</th>
                          <th class="text-center" colspan="2">Eleve</th>
                          <th>Etat</th>
                          <th>Rendu le</th>
                          <th>Commentaire</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="soumission in soumissions?.soumissions" :key="soumission.id">
                          <td>
                            <h2>
                              <a>{{soumission.id}}</a>
                            </h2>
                          </td>
                          <td>{{ soumission.eleve_prenom }}</td>
                          <td>{{ soumission.eleve_nom }}</td>
                          <td>{{ soumission.soumis }}</td>
                          <td>{{ soumission.dateSoumission }}</td>
                          <td>{{ soumission.commentaire }}</td>
                          <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <a
                                href="edit-exam.html"
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="feather-edit"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>Copyright © 2022 Dreamguys.</p>
        </footer>
      </div>
  </div>
</template>
