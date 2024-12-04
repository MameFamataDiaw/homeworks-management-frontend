<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
  //import { RouterView } from "vue-router";
  import { ref, onMounted } from "vue";
  import { getTeacherClassInfoHttp } from "./Dashboard";
  import { showError } from "@/helper/Toastnotification";

  const classInfo = ref({
    classe: "",
    elevesCount: 0,
    effectif: 0,
    // devoirsCount: 0,
  // soumisCount: 0,
  // nonSoumisCount: 0,
  // devoirs: [],
  })

  const loading = ref(false);

  async function fetchClassInfo(){
    try {
      loading.value = true;
      const data = await getTeacherClassInfoHttp();
      classInfo.value = data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      showError(error.message || "Une erreur s'est produite.");
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    fetchClassInfo();
  })
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
          <div class="row">
            <div class="col-sm-12">
              <div class="page-sub-header">
                <h3 class="page-title">Ma classe : {{ classInfo.classe }}</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Classe</a></li>
                  <li class="breadcrumb-item active">{{ classInfo.classe }}</li>
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
                    <h6>Elèves</h6>
                    <h3>{{ classInfo.elevesCount }}</h3>
                    <!-- <h3>{{ classInfo.effectif }}</h3> -->
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/dash-icon-01.svg" alt="Dashboard Icon">
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
                    <h6>Devoirs attribués</h6>
                    <h3>5</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon">
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
                    <h3>10</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/teacher-icon-03.svg" alt="Dashboard Icon">
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
                    <h6>Non soumis</h6>
                    <h3>20</h3>
                  </div>
                  <div class="db-icon">
                    <img
                        src="@/assets/img/icons/student-icon-01.svg"
                        alt="Dashboard Icon"
                      />
                  </div>
                </div>
              </div>
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
                        <h3 class="page-title">Devoirs assignés</h3>
                      </div>
                      <div
                        class="col-auto text-end float-end ms-auto download-grp"
                      >
                        <RouterLink to="/submits-list" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i>Voir les soumissions</RouterLink>
                        <RouterLink to="/create-devoir" class="btn btn-primary"><i class="fas fa-plus"></i></RouterLink>
                      </div>
                    </div>
                  </div>

                  <div class="table-responsive">
                    <table
                      class="table border-0 star-student table-hover table-center mb-0 datatable table-striped"
                    >
                      <thead class="student-thread">
                        <tr>
                          <th>ID</th>
                          <th>Matière</th>
                          <th>Lesson</th>
                          <th>Attribué le</th>
                          <th>A rendre le</th>
                          <th class="text-end">Contenu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>23</td>
                          <td>Résolution de problèmes</td>
                          <td>Données utiles, données inutiles</td>
                          <td>25/11/2024</td>
                          <td>26/11/2024</td>
                          <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <!-- <a
                                href="edit-exam.html"
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="feather-edit"></i>
                              </a> -->
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>Conjugaison</td>
                          <td>Infinitif des verbes</td>
                          <td>27/11/2024</td>
                          <td>29/11/2024</td>
                          <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <!-- <a
                                href="edit-exam.html"
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="feather-edit"></i>
                              </a> -->
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>Activité géomètrique</td>
                          <td>ligne droite - ligne brisée</td>
                          <td>30/11/2024</td>
                          <td>02/12/2024</td>
                          <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <!-- <a
                                href="edit-exam.html"
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="feather-edit"></i>
                              </a> -->
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>Vocabulaire</td>
                          <td>Employer les connecteurs logiques</td>
                          <td>30/11/2024</td>
                          <td>02/12/2024</td>
                          <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <!-- <a
                                href="edit-exam.html"
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="feather-edit"></i>
                              </a> -->
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
  <!-- <div class="row">
      <RouterView />
    </div> -->
</template>
