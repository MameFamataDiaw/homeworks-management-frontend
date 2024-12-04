<script setup lang="ts">

</script>
<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <div class="page-sub-header">
                <h3 class="page-title">Eleves</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="students.html">Eleve</a>
                  </li>
                  <li class="breadcrumb-item active">All Students</li>
                </ul>
              </div>
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
            <div class="card card-table comman-shadow">
              <div class="card-body">
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Students</h3>
                    </div>
                    <div class="col-auto text-end float-end ms-auto download-grp">
                      <a href="students.html" class="btn btn-outline-gray me-2 active"><i class="feather-list"></i></a>
                      <!-- <a href="students-grid.html" class="btn btn-outline-gray me-2"><i class="feather-grid"></i></a>
                      <a href="#" class="btn btn-outline-primary me-2"><i class="fas fa-download"></i> Download</a> -->
                      <RouterLink to="/create-eleve" class="btn btn-primary"><i class="fas fa-plus"></i></RouterLink>
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
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Genre</th>
                        <th>Classe</th>
                        <th>Prenom et nom du parent</th>
                        <th>Telephone</th>
                        <th class="text-end" colspan="3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="form-check check-tables">
                            <input class="form-check-input" type="checkbox" value="something" />
                          </div>
                        </td>
                        <td>Moussa</td>
                        <td>
                          Diaw
                          <!-- <h2 class="table-avatar">
                            <a href="student-details.html" class="avatar avatar-sm me-2"><img
                                class="avatar-img rounded-circle" src="@/assets/img/profiles/avatar-01.jpg"
                                alt="User Image" /></a>
                            <a href="student-details.html">Aaliyah</a>
                          </h2> -->
                        </td>
                        <td>Masculin</td>
                        <td>CE1 A</td>
                        <td>Fatoumata Sylla</td>
                        <td>778764086</td>
                        <td class="text-end">
                          <div class="actions">
                            <a href="javascript:;" class="btn btn-sm bg-success-light me-2">
                              <i class="feather-eye"></i>
                            </a>
                            <a href="edit-student.html" class="btn btn-sm bg-danger-light">
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


    </div>
  </div>
  <footer>
        <p>Copyright © 2022 Dreamguys.</p>
      </footer>
</template>
