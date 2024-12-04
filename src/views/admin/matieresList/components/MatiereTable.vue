<script setup lang="ts">
import type { GetMatieresResponseType } from '../actions/GetMatieresList';
import type { IEditMatiereDataInput } from '../types/matieresList-types';
import "../../../../assets/plugins/datatables/datatables.min.css"


defineProps<{
  matieres: GetMatieresResponseType | undefined
}>()

const emit = defineEmits<{
  (e: 'deleteMatiere', matiereId: number): void
  (e: 'editMatiere', matiere: IEditMatiereDataInput): void
}>()
</script>
<template>
  <!-- <table class="table table-bordered">
    <thead>
      <td>Id</td>
      <td>Nom de la matiere</td>
      <td colspan="3">Actions</td>
    </thead>
    <tbody>
      <tr v-for="matiere in matieres?.data" :key="matiere.id">
        <td>{{ matiere.id }}</td>
        <td>{{ matiere.nomMatiere }}</td>
        <td>
          <button class="btn btn-primary">Voir details</button>
        </td>
        <td>
          <button @click="emit('editMatiere', matiere)" class="btn btn-outline-primary">Modifier</button>
        </td>
        <td>
          <button @click="emit('deleteMatiere', matiere.id)" class="btn btn-outline-danger">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table> -->
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Matieres</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Matieres</li>
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
                <input type="text" class="form-control" placeholder="Search by Class ..." />
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
                      <h3 class="page-title">Matieres</h3>
                    </div>
                    <div class="col-auto text-end float-end ms-auto download-grp">
                      <!-- <a href="#" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a> -->
                      <RouterLink to="/create-matiere" class="btn btn-primary"><i class="fas fa-plus"></i></RouterLink>
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
                        <th>Name</th>
                        <th colspan="3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="matiere in matieres?.data" :key="matiere.id">
                        <td>
                          <div class="form-check check-tables">
                            <input class="form-check-input" type="checkbox" value="something" />
                          </div>
                        </td>
                        <td>{{ matiere.id }}</td>
                        <td>
                          <h2>
                            <a>{{ matiere.nomMatiere }}</a>
                          </h2>
                        </td>
                        <td>
                          <button class="btn btn-primary">Voir details</button>
                        </td>
                        <td>
                          <button @click="emit('editMatiere', matiere)"
                            class="btn btn-outline-primary">Modifier</button>
                        </td>
                        <td>
                          <button @click="emit('deleteMatiere', matiere.id)"
                            class="btn btn-outline-danger">Supprimer</button>
                        </td>
                        <!-- <td class="text-end">
                            <div class="actions">
                              <a
                                href="javascript:;"
                                class="btn btn-sm bg-success-light me-2"
                              >
                                <i class="feather-eye"></i>
                              </a>
                              <a
                                href="edit-subject.html"
                                class="btn btn-sm bg-danger-light"
                              >
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

      <footer>
        <p>Copyright © 2022 Dreamguys.</p>
      </footer>
    </div>
  </div>

</template>
