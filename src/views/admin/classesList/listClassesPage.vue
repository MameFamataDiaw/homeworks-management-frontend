<script setup lang="ts">
  import type { GetClassesResponseType } from "./actions/GetClassesList";
  import type { IEditClasseDataInput } from "./types/classesList-types";
  import "../../../assets/plugins/datatables/datatables.min.css"

defineProps<{
  classes: GetClassesResponseType | undefined
}>()

const emit = defineEmits<{
  (e: 'deleteClasse', classeId: number): void
  (e: 'editClasse', classe: IEditClasseDataInput): void
}>()
</script>
<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Enseignants</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Enseignants</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="student-group-form">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search by ID ..." />
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search by Name ..." />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search by Phone ..." />
              </div>
            </div>
            <div class="col-lg-2">
              <div class="search-student-btn">
                <button type="btn" class="btn btn-primary">Search</button>
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
                      <h3 class="page-title">Enseignant</h3>
                    </div>
                    <div class="col-auto text-end float-end ms-auto download-grp">
                      <a href="teachers.html" class="btn btn-outline-gray me-2 active"><i class="feather-list"></i></a>
                      <a href="teachers-grid.html" class="btn btn-outline-gray me-2"><i class="feather-grid"></i></a>
                      <!-- <a href="#" class="btn btn-outline-primary me-2"
                          ><i class="fas fa-download"></i> Download</a
                        > -->
                        <RouterLink to="/create-enseignant" class="btn btn-primary"><i class="fas fa-plus"></i></RouterLink>
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
                        <th>ID</th>
                        <th>Nom de la classe</th>
                        <th>Niveau</th>

                        <th class="text-begin" colspan="3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="classe in classes?.data" :key="classe.id">
                        <td>
                          <div class="form-check check-tables">
                            <input class="form-check-input" type="checkbox" value="something" />
                          </div>
                        </td>
                        <td>{{ classe.id }}</td>
                        <td>{{ classe.nomClasse }}</td>
                        <td>{{ classe.niveau }}</td>
                        <td>
                          <button class="btn btn-primary">Voir details</button>
                        </td>
                        <td>
                          <button @click="emit('editClasse', classe)" class="btn btn-outline-primary">Modifier</button>
                        </td>
                        <td>
                          <button @click="emit('deleteClasse', classe.id)"
                            class="btn btn-outline-danger">Supprimer</button>
                        </td>
                        <!-- <td class="text-end">
                          <div class="actions">
                            <a href="javascript:;" class="btn btn-sm bg-success-light me-2">
                              <i class="feather-eye"></i>
                            </a>
                            <a href="edit-teacher.html" class="btn btn-sm bg-danger-light">
                              <i class="feather-edit"></i>
                            </a>
                          </div>
                        </td> -->
                      </tr>
                    </tbody>
                  </table>
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
</template>
