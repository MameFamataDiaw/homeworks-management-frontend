<script setup lang="ts">

  import HeaderComponent from "@/components/Header.vue";
import SidebarComponent from "@/components/Sidebar.vue"
// console.log(window.jQuery); // Devrait afficher la fonction jQuery
// console.log($("#summernote")); // Devrait trouver votre élément




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
              <div class="col">
                <h3 class="page-title">Text Editor</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Components</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Editor</h5>
                </div>
                <div class="card-body">
                  <div id="summernote"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="row">
            <RouterView />
        </div>
    </div>
  </template>
