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
                  <h3 class="page-title">Exercice de Activité numérique - Le mettre et ses sous - multiples</h3>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="bank-inner-details">
                  <div class="row">
                    <div class="form-group row">
                      <!-- <label class="col-form-label col-md-2"> Contenu</label> -->
                      <div class="col-md-10">
                        <textarea
                          rows="15"
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
                  <RouterLink to="/send-message" class="btn bank-cancel-btn me-2">Question sur le devoir</RouterLink>
                  <RouterLink to="/devoirs-list" class="btn bank-cancel-btn me-2">Retour à la liste</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
