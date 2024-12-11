<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import HeaderComponent from "@/components/Header.vue"
import SidebarComponent from "@/components/Sidebar.vue"
import { onMounted, ref } from "vue";
import { getDevoirsAssignesHttp } from "./actions/Dashboard";
import type { IChildClassInfo } from "./types/assignDevoirs.types";
import { showError } from "@/helper/Toastnotification";

const classChildInfo = ref<IChildClassInfo | null>(null);
const loading = ref(false);

async function handleChildSelection(selectedChild: IChildClassInfo) {
  try {
    loading.value = true;
    const response = await getDevoirsAssignesHttp(selectedChild.id); // Assurez-vous que l'ID est disponible
    classChildInfo.value = response.data;
  } catch (error: any) {
    showError(error.message || "Une erreur s'est produite.");
  } finally {
    loading.value = false;
  }
}

// Le chargement initial peut rester, mais il utilisera maintenant le premier enfant par défaut
async function fetchClassChildInfo() {
  try {
    loading.value = true;
    const response = await getDevoirsAssignesHttp();
    classChildInfo.value = response.data;
  } catch (error: any) {
    showError(error.message || "Une erreur s'est produite.");
  } finally {
    loading.value = false;
  }
}
  onMounted(fetchClassChildInfo)

</script>
<template>
  <div>
    <HeaderComponent />
    <SidebarComponent  @selectEnfant="handleChildSelection" />
    <!-- <FooterComponent /> -->
  </div>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">

        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <div class="page-sub-header">
                <h3 class="page-title">Classe de {{ classChildInfo?.enfant || '...' }}</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Classe</a></li>
                  <li class="breadcrumb-item active">{{ classChildInfo?.classe?.nomClasse || '...' }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(stat, index) in [
                  { title: 'Devoirs à faire', count: classChildInfo?.stats.total },
                  { title: 'Soumis', count: classChildInfo?.stats.soumis },
                  { title: 'Non soumis', count: classChildInfo?.stats.non_soumis }
                ]"
                :key="index"
          class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-comman w-100">
              <div class="card-body">
                <div class="db-widgets d-flex justify-content-between align-items-center">
                  <div class="db-info">
                    <h6>{{ stat.title }}</h6>
                    <h3>{{ stat.count || 0 }}</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/student-icon-01.svg" alt="Dashboard Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-comman w-100">
              <div class="card-body">
                <div class="db-widgets d-flex justify-content-between align-items-center">
                  <div class="db-info">
                    <h6>Echeances</h6>
                    <h3>1</h3>
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
                    <h6>Soumis</h6>
                    <h3>1</h3>
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
                    <h6>Non soumis</h6>
                    <h3>2</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/teacher-icon-03.svg" alt="Dashboard Icon">
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="row">
          <div class="col-12 col-lg-12 col-xl-12">
            <div class="row">
              <div class="col-12 col-lg-8 col-xl-4 d-flex">
                <div class="card flex-fill comman-shadow">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col-6">
                        <h5 class="card-title">Lessons du jour</h5>
                      </div>
                      <div class="col-6">
                        <span class="float-end view-link"><a href="#">Parler au maître</a></span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-3 pb-2">
                    <div class="table-responsive lesson">
                      <table class="table table-center">
                        <tbody>
                          <tr>
                            <td>
                              <div class="date">
                                <b>Orthographe</b>
                                <p>3.1 Ipsuum dolor</p>
                                <ul class="teacher-date-list">

                                  <li>
                                    <!-- <i class="fas fa-clock me-2"></i> -->
                                    <p>A réviser pour</p>
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i class="fas fa-calendar-alt me-2"></i>4/12/2022
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>

                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="date">
                                <b>Histoire</b>
                                <p>3.1 Ipsuum dolor</p>
                                <ul class="teacher-date-list">
                                  <li>
                                    <!-- <i class="fas fa-clock me-2"></i> -->
                                    <p>A réviser pour</p>
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i class="fas fa-calendar-alt me-2"></i>4/12/2022
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>
                              <!-- <div class="lesson-confirm">
                                <a href="#">Confirmed</a>
                              </div>
                              <button type="submit" class="btn btn-info">
                                Reschedule
                              </button> -->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 col-xl-8 d-flex">
              <!-- <div class="col-12 col-lg-4 col-xl-12 d-flex"> -->
                  <div class="card flex-fill comman-shadow">
                    <div class="card-header d-flex align-items-center">
                      <h5 class="card-title">Exercices à faire</h5>
                      <ul class="chart-list-out student-ellips">
                        <li class="star-menus">
                          <a href="javascript:;"
                            ><i class="fas fa-ellipsis-v"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <div class="teaching-card">
                        <ul class="steps-history">
                          <!-- <li>Sep22</li>
                          <li>Sep23</li>
                          <li>Sep24</li> -->
                        </ul>
                        <ul class="activity-feed">
                          <li v-for="(devoir, index) in classChildInfo?.devoirs || []" :key="index"
                          class="feed-item d-flex align-items-center">
                            <div class="dolor-activity">
                              <span class="feed-text1"><a>{{ devoir.matiere }}</a></span>
                              <ul class="teacher-date-list">
                                <li>
                                  <span>{{ devoir.module }}</span>
                                  <!-- <i class="fas fa-clock me-2"></i> -->
                                </li>
                                <li>|</li>
                                <li>
                                  <i class="fas fa-calendar-alt me-2"></i
                                  >{{ devoir.date_soumission }}
                                </li>
                              </ul>
                            </div>
                            <div class="activity-btns ms-auto">
                              <RouterLink to="/consult-devoir" class="btn btn-info">Consulter</RouterLink>
                              <!-- <button type="submit" class="btn btn-info">
                                In Progress
                              </button> -->
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
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
