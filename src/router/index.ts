import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/auth/AuthPage.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('../views/auth/LoginPage.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/auth/RegisterPage.vue'),
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminPage.vue'),
      children: [
        {
          path: '/admin',
          name: 'dashboard',
          component: () => import('../views/admin/dashboard/DashboardPage.vue'),
        },
        {
          path: '/create-classe',
          name: 'create-classe',
          component: () => import('../views/admin/createClasse/CreateClassePage.vue'),
        },
        {
          path: '/classes-list',
          name: 'classes-list',
          component: () => import('../views/admin/classesList/ClassesListPage.vue'),
        },
        {
          path: '/create-matiere',
          name: 'create-matiere',
          component: () => import('../views/admin/createMatiere/CreateMatierePage.vue'),
        },
        {
          path: '/matieres-list',
          name: 'matieres-list',
          component: () => import('../views/admin/matieresList/MatieresListPage.vue'),
        },
        {
          path: "/assign-subjects",
          name: "AssignSubjects",
          component: () => import("@/views/admin/assignSubjects/AssignSubjectsPage.vue"),
        },
        {
          path: "/create-enseignant",
          name: "create-enseignant",
          component: () => import("@/views/admin/enseignants/createEnseignant/CreateEnseignantPage.vue"),
        },
        {
          path: "/enseignants-list",
          name: "enseignants-list",
          component: () => import("@/views/admin/enseignants/enseignantsList/EnseignantsListPage.vue"),
        },
        {
          path: "/create-parent",
          name: "create-parent",
          component: () => import("@/views/admin/parents/createParent/CreateParentPage.vue"),
        },
        {
          path: "/parents-list",
          name: "parents-list",
          component: () => import("@/views/admin/parents/parentsList/ParentsListPage.vue"),
        },
        {
          path: "/create-eleve",
          name: "create-eleve",
          component: () => import("@/views/admin/eleves/createEleve/CreateElevePage.vue"),
        },
        {
          path: "/eleves-list",
          name: "eleves-list",
          component: () => import("@/views/admin/eleves/elevesList/ElevesListPage.vue"),
        },
        {
          path: '/change-password',
          name: 'ChangePassword',
          component: () => import('@/views/auth/ChangePasswordPage.vue'),
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardPage.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  if (to.name !== 'ChangePassord' && userData.user?.role !== 'admin' && userData.user?.first_Login) {
    return next({ name: 'ChangePassword' });
  }

  next();
})

export default router
