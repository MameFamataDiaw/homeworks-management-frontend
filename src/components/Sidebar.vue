<script lang="ts">

  import { useAuthStore } from "@/stores/authStore"
  import { computed } from "vue"
  import { onMounted } from "vue";
  import "../assets/plugins/icons/flags/flags.css"
  import "../assets/js/feather.min.js"
  import "../assets/plugins/slimscroll/jquery.slimscroll.min.js"
  import "../assets/plugins/apexchart/apexcharts.min.js"
  import "../assets/plugins/apexchart/chart-data.js"
  import { RouterLink } from "vue-router";

    export default {
      name: "SidebarComponent",
      setup() {
        const authStore = useAuthStore();
        //Simule l'initialisation
      onMounted(() => {
        authStore.setRole("enseignant"); // Test avec un rôle fixe, remplace-le par la récupération API.
      });

        const userRole = computed(() => authStore.user.role);
        console.log(authStore.user.role)
        const isAdmin = computed(() => userRole.value === "admin");
        const isTeacher = computed(() => userRole.value === "enseignant");
        const isStudent = computed(() => userRole.value === "eleve");
        const isParent = computed(() => userRole.value === "parent");

        return {
          isAdmin,
          isTeacher,
          isStudent,
          isParent,
        };
      },
    };
</script>
<template>
  <!-- <div class="main-wrapper"> -->
    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li class="menu-title">
            <span>Menu Principal</span>
          </li>
          <li class="submenu active">
            <a href="#"><i class="feather-grid"></i> <span> Dashboard</span> <span class="menu-arrow"></span></a>
            <ul>
              <li v-if="isAdmin"><RouterLink to="/admin" class="active">Admin Dashboard</RouterLink></li>
              <li v-if="isTeacher"><RouterLink to="/enseignant">Enseignant Dashboard</RouterLink></li>
              <li v-if="isStudent"><RouterLink to="/eleve">Eleve Dashboard</RouterLink></li>
            </ul>
          </li>
          <!-- Admin routes -->
          <li v-if="isAdmin"><RouterLink to="/eleves-list">Eleves</RouterLink></li>
          <li v-if="isAdmin"><RouterLink to="/enseignants-list">Enseignants</RouterLink></li>
          <li v-if="isAdmin"><RouterLink to="/parents-list">Parents</RouterLink></li>
          <li v-if="isAdmin"><RouterLink to="/classes-list">Classes</RouterLink></li>
          <li v-if="isAdmin"><RouterLink to="/matieres-list">Matieres</RouterLink></li>

          <!-- Teacher routes -->
          <li v-if="isTeacher"><RouterLink to="/devoirs-list">Liste des devoirs</RouterLink></li>
          <li v-if="isTeacher"><RouterLink to="/submits-list">Soumissions</RouterLink></li>
          <li v-if="isTeacher"><RouterLink to="/eleves-classe-list">Eleves</RouterLink></li>
          <li><RouterLink to="/receive-message">Messagerie</RouterLink></li>
          <!-- <li><RouterLink to=""></RouterLink></li> -->
          <!-- <li><RouterLink to=""></RouterLink></li> -->


          <li class="menu-title">
            <span>Pages</span>
          </li>
          <li>
            <a href="blank-page.html"><i class="fas fa-file"></i> <span>Ressources</span></a>
          </li>
          <li class="submenu">
            <a href="#"><i class="fas fa-shield-alt"></i> <span> Authentification </span> <span
                class="menu-arrow"></span></a>
            <ul>
              <li><RouterLink to="/">Login</RouterLink></li>
              <li><a href="register.html">Register</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
              <li><a href="error-404.html">Error Page</a></li>
            </ul>
          </li>
          <!-- <li class="menu-title">
            <span>Others</span>
          </li>
          <li>
            <a href="sports.html"><i class="fas fa-baseball-ball"></i> <span>Sports</span></a>
          </li>
          <li>
            <a href="hostel.html"><i class="fas fa-hotel"></i> <span>Hostel</span></a>
          </li>
          <li>
            <a href="transport.html"><i class="fas fa-bus"></i> <span>Transport</span></a>
          </li>
          <li class="menu-title">
            <span>UI Interface</span>
          </li>
          <li class="submenu">
            <a href="#"><i class="fab fa-get-pocket"></i> <span>Base UI </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="alerts.html">Alerts</a></li>
              <li><a href="accordions.html">Accordions</a></li>
              <li><a href="avatar.html">Avatar</a></li>
              <li><a href="badges.html">Badges</a></li>
              <li><a href="buttons.html">Buttons</a></li>
              <li><a href="buttongroup.html">Button Group</a></li>
              <li><a href="breadcrumbs.html">Breadcrumb</a></li>
              <li><a href="cards.html">Cards</a></li>
              <li><a href="carousel.html">Carousel</a></li>
              <li><a href="dropdowns.html">Dropdowns</a></li>
              <li><a href="grid.html">Grid</a></li>
              <li><a href="images.html">Images</a></li>
              <li><a href="lightbox.html">Lightbox</a></li>
              <li><a href="media.html">Media</a></li>
              <li><a href="modal.html">Modals</a></li>
              <li><a href="offcanvas.html">Offcanvas</a></li>
              <li><a href="pagination.html">Pagination</a></li>
              <li><a href="popover.html">Popover</a></li>
              <li><a href="progress.html">Progress Bars</a></li>
              <li><a href="placeholders.html">Placeholders</a></li>
              <li><a href="rangeslider.html">Range Slider</a></li>
              <li><a href="spinners.html">Spinner</a></li>
              <li><a href="sweetalerts.html">Sweet Alerts</a></li>
              <li><a href="tab.html">Tabs</a></li>
              <li><a href="toastr.html">Toasts</a></li>
              <li><a href="tooltip.html">Tooltip</a></li>
              <li><a href="typography.html">Typography</a></li>
              <li><a href="video.html">Video</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i data-feather="box"></i> <span>Elements </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="ribbon.html">Ribbon</a></li>
              <li><a href="clipboard.html">Clipboard</a></li>
              <li><a href="drag-drop.html">Drag & Drop</a></li>
              <li><a href="rating.html">Rating</a></li>
              <li><a href="text-editor.html">Text Editor</a></li>
              <li><a href="counter.html">Counter</a></li>
              <li><a href="scrollbar.html">Scrollbar</a></li>
              <li><a href="notification.html">Notification</a></li>
              <li><a href="stickynote.html">Sticky Note</a></li>
              <li><a href="timeline.html">Timeline</a></li>
              <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
              <li><a href="form-wizard.html">Form Wizard</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i data-feather="bar-chart-2"></i> <span> Charts </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="chart-apex.html">Apex Charts</a></li>
              <li><a href="chart-js.html">Chart Js</a></li>
              <li><a href="chart-morris.html">Morris Charts</a></li>
              <li><a href="chart-flot.html">Flot Charts</a></li>
              <li><a href="chart-peity.html">Peity Charts</a></li>
              <li><a href="chart-c3.html">C3 Charts</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i data-feather="award"></i> <span> Icons </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
              <li><a href="icon-feather.html">Feather Icons</a></li>
              <li><a href="icon-ionic.html">Ionic Icons</a></li>
              <li><a href="icon-material.html">Material Icons</a></li>
              <li><a href="icon-pe7.html">Pe7 Icons</a></li>
              <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
              <li><a href="icon-themify.html">Themify Icons</a></li>
              <li><a href="icon-weather.html">Weather Icons</a></li>
              <li><a href="icon-typicon.html">Typicon Icons</a></li>
              <li><a href="icon-flag.html">Flag Icons</a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i class="fas fa-columns"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
              <li><a href="form-input-groups.html">Input Groups </a></li>
              <li><a href="form-horizontal.html">Horizontal Form </a></li>
              <li><a href="form-vertical.html"> Vertical Form </a></li>
              <li><a href="form-mask.html"> Form Mask </a></li>
              <li><a href="form-validation.html"> Form Validation </a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i class="fas fa-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
            <ul>
              <li><a href="tables-basic.html">Basic Tables </a></li>
              <li><a href="data-tables.html">Data Table </a></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="javascript:void(0);"><i class="fas fa-code"></i> <span>Multi Level</span> <span
                class="menu-arrow"></span></a>
            <ul>
              <li class="submenu">
                <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                <ul>
                  <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                  <li class="submenu">
                    <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                    <ul>
                      <li><a href="javascript:void(0);">Level 3</a></li>
                      <li><a href="javascript:void(0);">Level 3</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);"> <span>Level 1</span></a>
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->

</template>
