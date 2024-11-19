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
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
