<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
  import { confirmDelation } from "@/helper/SweetAlert";
  import { successMsg } from "@/helper/Toastnotification";
  import { devoirStore } from "@/stores/enseignant/devoirStore";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { type GetDevoirsResponseType, getDevoirsHttp } from "./actions/GetDevoirsList";
  import type { IEditDevoirDataInput } from "./types/devoirsList.types";

  const devoirs = ref<GetDevoirsResponseType>()

  async function showDevoirs(){
    try {
    const data = await getDevoirsHttp();
    devoirs.value = data;
    console.log("Devoirs:", devoirs.value); // Vérifiez les données
  } catch (error) {
    console.error("Erreur lors de la récupération des devoirs :", error);
  }
  }

  // const searchDevoirs = myDebounce(async function(){
  //   await showDevoirs(1,query.value)
  // }, 300)

  async function deleteDevoir(devoirId:number){
    confirmDelation().then(async () => {
      console.log('delete matiere')
      const data = await deleteDevoirHttp(devoirId)
      await showDevoirs()
      successMsg(data.message)
    }).catch((error) => console.log(error))
  }

  const router = useRouter()

  function editDevoirData(devoirData:IEditDevoirDataInput){
    // console.log(classeData)
    devoirStore.editDevoirData.id=devoirData.id
    devoirStore.editDevoirData.module=devoirData.module
    devoirStore.editDevoirData.contenu=devoirData.contenu
    devoirStore.editDevoirData.document=devoirData.document
    devoirStore.editDevoirData.matiere_id=devoirData.matiere_id
    devoirStore.editDevoir.edit=true
    router.push('/create-devoir')
  }



  onMounted(async()=>{
    await showDevoirs()
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
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Ma classe</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">CE 1</a>
                  </li>
                  <li class="breadcrumb-item active">Devoirs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="student-group-form">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Rechercher par matiere ..."
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Rechercher par module ..."
                  />
                </div>
              </div>
              <!-- <div class="col-lg-4 col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by Class ..."
                  />
                </div>
              </div> -->
              <div class="col-lg-2">
                <div class="search-student-btn">
                  <button type="btn" class="btn btn-primary">Rechercher</button>
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
                        <h3 class="page-title">Liste des devoirs</h3>
                      </div>
                      <div
                        class="col-auto text-end float-end ms-auto download-grp"
                      >
                        <!-- <a href="#" class="btn btn-outline-primary me-2"
                          ><i class="fas fa-download"></i> Download</a
                        > -->
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
                          <th>
                            <div class="form-check check-tables">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="something"
                              />
                            </div>
                          </th>
                          <th>Matieres</th>
                          <th>Module</th>
                          <th>Creer le</th>
                          <th class="text-center" colspan="2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="devoir in devoirs?.devoirs" :key="devoir.id">
                          <td>
                            <div class="form-check check-tables">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="something"
                              />
                            </div>
                          </td>
                          <td>{{ devoir.matiere?.nomMatiere }}</td>
                          <td>
                            <h2>
                              <a>{{ devoir.module }}</a>
                            </h2>
                          </td>
                          <td>{{ devoir.dateAjout }}</td>
                          <td class="text-center">
                            <RouterLink to="/show-devoir" class="btn btn-secondary">Contenu</RouterLink>
                          </td>
                          <td class="text-center">
                            <button type="button" class="btn btn-primary">Assigner</button>
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
