<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<script lang="ts">

import { useAuthStore } from "@/stores/authStore"
import { getChildListHttp } from "@/views/parents/actions/getEnfants";
import type { IChildClassInfo } from "@/views/parents/types/assignDevoirs.types";
import { computed, defineComponent, onMounted, ref } from "vue"

export default defineComponent({
  name: "SidebarComponent",
  emits: ["selectEnfant"],
  setup(_, { emit }) {
    const authStore = useAuthStore();
    const enfants = ref<IChildClassInfo[]>([]); // Initialisation avec un tableau typé
    const selectedEnfant = ref<IChildClassInfo | null>(null); // Pour l'enfant sélectionné
    const loading = ref(true);
    const userRole = computed(() => authStore.user.role);
    const isAdmin = computed(() => userRole.value === "admin");
    const isTeacher = computed(() => userRole.value === "enseignant");
    const isStudent = computed(() => userRole.value === "eleve");
    const isParent = computed(() => userRole.value === "parent");

    const fetchChildren = async () => {
      loading.value = true;
      try {
        const response = await getChildListHttp();
        enfants.value = response.data;
        if (enfants.value.length > 0) {
          selectedEnfant.value = enfants.value[0];
          emit("selectEnfant", selectedEnfant.value);
        }
      } catch (error: any) {
        console.error("Erreur lors de la récupération des enfants :", error.message);
      } finally {
        loading.value = false;
      }
    };

    const selectEnfant = (enfant: IChildClassInfo) => {
      selectedEnfant.value = enfant;
      emit("selectEnfant", enfant);
    };

    //Simule l'initialisation
    onMounted(async () => {
      authStore.setRole("eleve"); // Test avec un rôle fixe, remplace-le par la récupération API.
      if (isParent.value) fetchChildren();
    });

    return {
      isAdmin,
      isTeacher,
      isStudent,
      isParent,
      enfants,
      selectedEnfant,
      loading,
      selectEnfant,
    };
  },
});
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
              <li v-if="isAdmin">
                <RouterLink to="/admin" class="active">Admin Dashboard</RouterLink>
              </li>
              <li v-if="isTeacher">
                <RouterLink to="/enseignant">Enseignant Dashboard</RouterLink>
              </li>
              <li v-if="isStudent">
                <RouterLink to="/eleve">Eleve Dashboard</RouterLink>
              </li>
              <li v-if="isParent">
                <RouterLink to="/parent">Parent Dashboard</RouterLink>
              </li>
            </ul>
          </li>
          <!-- Admin routes -->
          <li v-if="isAdmin">
            <RouterLink to="/eleves-list">Eleves</RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/enseignants-list">Enseignants</RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/parents-list">Parents</RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/classes-list">Classes</RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/matieres-list">Matieres</RouterLink>
          </li>

          <!-- Teacher routes -->
          <li v-if="isTeacher">
            <RouterLink to="/devoirs-list">Liste des devoirs</RouterLink>
          </li>
          <li v-if="isTeacher">
            <RouterLink to="/submits-list">Soumissions</RouterLink>
          </li>
          <li v-if="isTeacher">
            <RouterLink to="/eleves-classe-list">Eleves</RouterLink>
          </li>

          <!-- Parent routes -->
          <li v-if="isParent" class="menu-title">
            <span>Classes de vos enfants</span>
          </li>

          <li v-if="loading && isParent">Chargement...</li>
          <li v-for="(enfant, index) in enfants"
            :key="index"
            :class="{ 'active': selectedEnfant?.enfant === enfant.enfant }"
            class="child-item">
            <RouterLink to="parent-dashboard"
              @click.prevent="selectEnfant(enfant)"
              :class="{ 'active': selectedEnfant?.enfant === enfant.enfant }">
              {{ enfant.enfant }} - {{ enfant.classe }}
            </RouterLink>
          </li>

          <!-- Routes commun -->
          <li>
            <RouterLink to="/receive-message">Messagerie</RouterLink>
          </li>
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
              <li>
                <RouterLink to="/">Login</RouterLink>
              </li>
              <li><a href="register.html">Register</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
              <li><a href="error-404.html">Error Page</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->

</template>
<style scoped>
.child-item {
  cursor: pointer;
}

.child-item.active {
  background-color: #f8f9fa;
}

.child-item a.active {
  color: #007bff;
}
</style>
