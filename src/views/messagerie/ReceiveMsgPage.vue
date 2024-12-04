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
          <div class="col-xl-8">

            <div class="page-header">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="page-title">Envoyer un message</h3>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="bank-inner-details">
                  <div class="row">

                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Module</label>
                      <div class="col-md-8">
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Ajouter le contenu</label>
                      <div class="col-md-8">
                        <textarea
                          rows="5"
                          cols="5"
                          class="form-control"

                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" blog-categories-btn pt-0">
                <div class="bank-details-btn ">
                  <a href="blog.html" class="btn bank-cancel-btn me-2">Envoyer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
