<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
  //import { RouterView } from "vue-router";
  import { ref, onMounted } from "vue";
  import { getTeacherClassInfoHttp } from "./Dashboard";
  import { showError } from "@/helper/Toastnotification";
import { getAssignedDevoirsHttp } from "./devoirs/assignDevoir/actions/GetAssignedDevoir";
import type { GetAssignedDevoirsResponseType } from "./devoirs/assignDevoir/actions/GetAssignedDevoir";

  const classInfo = ref({
    classe: "",
    elevesCount: 0,
    effectif: 0,
    // devoirsCount: 0,
  // soumisCount: 0,
  // nonSoumisCount: 0,
  // devoirs: [],
  })

  const assignedDevoirs = ref<GetAssignedDevoirsResponseType>()

  const loading = ref(false);

  async function fetchClassInfo(){
    try {
      loading.value = true;
      const data = await getTeacherClassInfoHttp();
      classInfo.value = data;
    } catch (error:any) {
      showError(error.message || "Une erreur s'est produite.");
    } finally {
      loading.value = false;
    }
  }

  async function showAssignedDevoirs() {
    try {
      loading.value = true
      const data = await getAssignedDevoirsHttp();
      assignedDevoirs.value = data
    } catch (error:any) {
      showError(error.message || "Une erreur s'est produite.");
    } finally {
      loading.value = false;
    }

  }

  onMounted(() => {
    fetchClassInfo();
    showAssignedDevoirs();
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
                          <th>A rendre</th>
                          <th class="text-end">Soumissions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="devoir in assignedDevoirs?.devoirs" :key="devoir.id">
                          <td>{{ devoir.id }}</td>
                          <td>{{ devoir.matiere }}</td>
                          <td>{{ devoir.module }}</td>
                          <td>{{ devoir.soumissions[0].dateAttribution }}</td>
                          <td>{{ devoir.soumissions[0].aRendre }}</td>
                          <td>
                            <div class="actions">
                              <!-- <RouterLink to="/submits-list" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i>Voir les soumissions</RouterLink> -->
                              <RouterLink :to="`/submits-list/${devoir.id}`"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </RouterLink>

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
