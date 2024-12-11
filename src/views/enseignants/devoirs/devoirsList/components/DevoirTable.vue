<script setup lang="ts">
  import { type GetDevoirsResponseType } from '../actions/GetDevoirsList';
  defineProps<{
    devoirs : GetDevoirsResponseType | undefined
  }>()

  const emit = defineEmits<{
    (e: 'showModal', devoirId: number): void
  }>()

</script>
<template>
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
                      @showModal="showModal"
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
                            <button @click="emit('showModal',devoir.id)" class="btn btn-primary">Assigner</button>
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
