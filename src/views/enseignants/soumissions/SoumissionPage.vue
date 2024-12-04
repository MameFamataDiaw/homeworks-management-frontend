<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue"
  import SidebarComponent from "@/components/Sidebar.vue"
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
                        <h3 class="page-title">Soumissions</h3>
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
                          <th>Devoir sur</th>
                          <th colspan="2">Eleve</th>
                          <th>Rendu le</th>
                          <th>Commentaire</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2>
                              <a>Reconnaitre une phrase dans un texte</a>
                            </h2>
                          </td>
                          <td>Fatima</td>
                          <td>Ndiaye</td>
                          <td>24/11/2024</td>
                          <td></td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Le mètre et ses sous-multiples</a>
                            </h2>
                          </td>
                          <td>Mouhamed</td>
                          <td>Diop</td>
                          <td>24/11/2024</td>
                          <td>J'ai terminé mon exercice.</td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Accord de l'adjectif qualificatif</a>
                            </h2>
                          </td>
                          <td>Yacine</td>
                          <td>Seck</td>
                          <td>24/11/2024</td>
                          <td>J'ai fini mon exercice.</td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Le mètre et ses sous-multiples</a>
                            </h2>
                          </td>
                          <td>Moussa</td>
                          <td>Diaw</td>
                          <td>24/11/2024</td>
                          <td>J'ai soumis mon devoir</td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Auxiliaires avoir et être au futur</a>
                            </h2>
                          </td>
                          <td>Khadija</td>
                          <td>Samb</td>
                          <td>23/11/2024</td>
                          <td></td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Accord de l'adjectif qualificatif</a>
                            </h2>
                          </td>
                          <td>Aicha</td>
                          <td>Ba</td>
                          <td>23/11/2024</td>
                          <td></td>
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
                        <tr>
                          <td>
                            <h2>
                              <a>Le mètre et ses unites</a>
                            </h2>
                          </td>
                          <td>Moussa</td>
                          <td>Diaw</td>
                          <td>24/11/2024</td>
                          <td></td>
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
