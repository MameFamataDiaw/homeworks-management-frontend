<script setup lang="ts">
//   import { getUserData } from "@/helper/getUserData";
//   import { RouterLink, RouterView } from "vue-router";
// import { logoutUserHttp } from "./actions/LogoutUser";
// import { successMsg } from "@/helper/Toastnotification";
// import { onMounted } from "vue";
// import { userIsLoggedInHttp } from "./actions/UserIsLoggedIn";
import HeaderComponent from "@/components/Header.vue";
import SidebarComponent from "@/components/Sidebar.vue"
// import FooterComponent from "@/components/Footer.vue"
import "../../assets/js/jquery-3.6.0.min.js"
import "../../assets/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "../../assets/js/feather.min.js"
import "../../assets/plugins/slimscroll/jquery.slimscroll.min.js"
import "../../assets/plugins/apexchart/apexcharts.min.js"
import "../../assets/plugins/apexchart/chart-data.js"
import "../../assets/js/script.js"


// const userData = getUserData()

// async function logoutUser(){
//   // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
//   const userId = userData?.user?.id!
//   if (typeof userId! !== 'undefined') {
//     const data = await logoutUserHttp(userId)
//     localStorage.clear()
//     successMsg(data.message)
//     setTimeout(() => {
//       window.location.href="/"
//     }, 2000)

//   }

// }

// async function userIsLoggedIn(){
//   try {
//     await userIsLoggedInHttp()

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error:any) {
//     //console.log(error)
//     //if (error instanceof Error) {
//       console.log(error)
//       if (error.message == 'Unauthenticated.') {
//         window.location.href="/"
//       }
//     //}
//   }
// }

// onMounted(async() =>{
//   await userIsLoggedIn()
// })
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
                <h3 class="page-title">Bonjour Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active">Admin</li>
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
                    <h6>Eleves</h6>
                    <h3>2000</h3>
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
                    <h6>Enseignant(e)s</h6>
                    <h3>20</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon">
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
                    <h6>Classes</h6>
                    <h3>24</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/dash-icon-03.svg" alt="Dashboard Icon">
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
                    <h6>Parents</h6>
                    <h3>1000</h3>
                  </div>
                  <div class="db-icon">
                    <img src="@/assets/img/icons/dash-icon-04.svg" alt="Dashboard Icon">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="row">
          <div class="col-md-12 col-lg-6">

            <div class="card card-chart">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-6">
                    <h5 class="card-title">Overview</h5>
                  </div>
                  <div class="col-6">
                    <ul class="chart-list-out">
                      <li><span class="circle-blue"></span>Teacher</li>
                      <li><span class="circle-green"></span>Student</li>
                      <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="apexcharts-area"></div>
              </div>
            </div>

          </div>
          <div class="col-md-12 col-lg-6">

            <div class="card card-chart">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-6">
                    <h5 class="card-title">Number of Students</h5>
                  </div>
                  <div class="col-6">
                    <ul class="chart-list-out">
                      <li><span class="circle-blue"></span>Girls</li>
                      <li><span class="circle-green"></span>Boys</li>
                      <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="bar"></div>
              </div>
            </div>

          </div>
        </div> -->
        <div class="row">
          <div class="col-xl-12 d-flex">

            <div class="card flex-fill student-space comman-shadow">
              <div class="card-header d-flex align-items-center">
                <h5 class="card-title">Listes des classes</h5>
                <ul class="chart-list-out student-ellips">
                  <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table star-student table-hover table-center table-borderless table-striped">
                    <thead class="thead-light">
                      <tr>
                        <th class="">Nom de la classe</th>
                        <th class="">Niveau</th>
                        <th class="text-center">Matieres</th>
                        <th class="text-center">Enseignants</th>
                        <th class="text-center">Eleves</th>
                        <th class="text-center">Voir</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <div>CI</div>
                        </td>
                        <td class="">
                          Cours d'inition
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">5</td>
                        <td class="text-center">M.Ba</td>
                        <td class="text-center">
                          <div>25</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div>CP</div>
                        </td>
                        <td class="">
                          Cours Preparatoire
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">8</td>
                        <td class="text-center">M.Gomis</td>
                        <td class="text-center">
                          <div>27</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div>CE1</div>
                        </td>
                        <td class="">
                          Cours Elementaire 1er niveau
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">11</td>
                        <td class="text-center">M. Top</td>
                        <td class="text-center">
                          <div>30</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div>CE2</div>
                        </td>
                        <td class="">
                          Cours Elementaire 2eme niveau
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">11</td>
                        <td class="text-center">Mme Fall</td>
                        <td class="text-center">
                          <div>32</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div>CM 1</div>
                        </td>
                        <td class="">
                          Cours Moyen 1er niveau
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">12</td>
                        <td class="text-center">M.Ndiaye</td>
                        <td class="text-center">
                          <div>34</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <div>CM 2</div>
                        </td>
                        <td class="">
                          Cours Moyen 2eme niveau
                          <!-- <a href="profile.html">
                            <img class="rounded-circle" src="@/assets/img/profiles/avatar-02.jpg" width="25"
                              alt="Star Students">
                            John Smith
                          </a> -->
                        </td>
                        <td class="text-center">12</td>
                        <td class="text-center">M. LO</td>
                        <td class="text-center">
                          <div>35</div>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-block btn-outline-info">Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
          <div class="col-xl-6 d-flex">

            <!-- <div class="card flex-fill comman-shadow">
              <div class="card-header d-flex align-items-center">
                <h5 class="card-title ">Student Activity </h5>
                <ul class="chart-list-out student-ellips">
                  <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="activity-groups">
                  <div class="activity-awards">
                    <div class="award-boxs">
                      <img src="@/assets/img/icons/award-icon-01.svg" alt="Award">
                    </div>
                    <div class="award-list-outs">
                      <h4>1st place in "Chess”</h4>
                      <h5>John Doe won 1st place in "Chess"</h5>
                    </div>
                    <div class="award-time-list">
                      <span>1 Day ago</span>
                    </div>
                  </div>
                  <div class="activity-awards">
                    <div class="award-boxs">
                      <img src="@/assets/img/icons/award-icon-02.svg" alt="Award">
                    </div>
                    <div class="award-list-outs">
                      <h4>Participated in "Carrom"</h4>
                      <h5>Justin Lee participated in "Carrom"</h5>
                    </div>
                    <div class="award-time-list">
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <div class="activity-awards">
                    <div class="award-boxs">
                      <img src="@/assets/img/icons/award-icon-03.svg" alt="Award">
                    </div>
                    <div class="award-list-outs">
                      <h4>Internation conference in "St.John School"</h4>
                      <h5>Justin Leeattended internation conference in "St.John School"</h5>
                    </div>
                    <div class="award-time-list">
                      <span>2 Week ago</span>
                    </div>
                  </div>
                  <div class="activity-awards mb-0">
                    <div class="award-boxs">
                      <img src="@/assets/img/icons/award-icon-04.svg" alt="Award">
                    </div>
                    <div class="award-list-outs">
                      <h4>Won 1st place in "Chess"</h4>
                      <h5>John Doe won 1st place in "Chess"</h5>
                    </div>
                    <div class="award-time-list">
                      <span>3 Day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="row">
      <RouterView />
    </div>
</template>
