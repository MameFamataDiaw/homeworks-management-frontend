<script setup lang="ts">
  import HeaderComponent from "@/components/Header.vue";
import SidebarComponent from "@/components/Sidebar.vue"


</script>
<template>

<HeaderComponent />
<SidebarComponent />
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-xl-12">

            <div class="page-header">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="page-title">Devoir de grammaire - Reconnaitre une phrase dans un texte</h3>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="bank-inner-details">
                  <div class="row">
                    <div class="form-group row">
                      <label class="col-form-label col-md-2"
                        >Matiere</label
                      >
                      <div class="col-md-10">
                        <select class="form-control form-select">
                          <option>Matieres</option>
                          <option>Activite numerique</option>
                          <option>Activite de mesure</option>
                          <option>Langue et communication</option>
                          <option>Grammaire</option>
                          <option>Conjugaison</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Module</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <!-- <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Title<span class="text-danger">*</span></label>
                        <input type="text" class="form-control">
                      </div>
                    </div> -->
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Fichier joint</label>
                      <div class="col-md-10">
                        <input class="form-control" type="file" />
                      </div>
                    </div>
                    <!-- <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Blog Image</label>
                        <div class="change-photo-btn">
                          <div>
                            <p>Add Image</p>
                          </div>
                          <input type="file" class="upload">
                        </div>
                      </div>
                    </div> -->
                    <div class="form-group row">
                      <label class="col-form-label col-md-2"> Contenu</label>
                      <div class="col-md-10">
                        <textarea
                          rows="5"
                          cols="5"
                          class="form-control"

                        ></textarea>
                      </div>
                    </div>
                    <!-- <div class="form-group row">
                      <label class="col-form-label col-md-2">Date</label>
                      <div class="col-md-10">
                        <input type="date" id="date" class="form-control" />
                      </div>

                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Date</label>
                      <div class="col-md-10">
                        <input type="date" id="date" class="form-control" />
                      </div>

                    </div> -->

                    <!-- <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <div id="editor"></div>
                      </div>
                    </div> -->


                  </div>
                </div>
              </div>
              <div class=" blog-categories-btn pt-0">
                <div class="bank-details-btn ">
                  <a href="blog.html" class="btn bank-cancel-btn me-2">Modifier</a>
                </div>
              </div>
              <div class=" blog-categories-btn pt-0">
                <div class="bank-details-btn ">
                  <RouterLink to="/devoirs-list" class="btn bank-cancel-btn me-2">Assigner</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
