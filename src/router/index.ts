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
        },
        {
          path: '/change-password',
          name: 'ChangePassword',
          component: () => import('@/views/auth/ChangePasswordPage.vue'),
        },
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
          path: '/list',
          name: 'list-classes',
          component: () => import('../views/admin/classesList/listClassesPage.vue'),
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

    {
      path: '/eleve-dashboard',
      name: 'eleveDashboard',
      component: () => import('@/views/eleves/ElevesDashboard.vue'),
    },
    {
      path: '/parent-dashboard',
      name: 'parentDashboard',
      component: () => import('@/views/parents/ParentDashboard.vue'),
    },
    {
      path: '/consult-devoir',
      name: 'consult-devoir',
      component: () => import('../views/parents/devoirs/ConsultDevoirPage.vue'),
    },
    {
      path: '/enseignant-dashboard',
      name: 'enseignantDashboard',
      component: () => import('@/views/enseignants/EnseignantDashboard.vue'),
      children: [

      ]
    },
    {
      path: "/eleves-classe-list",
      name: "eleves-classe-list",
      component: () => import("@/views/enseignants/eleves/ElevesClassePage.vue"),
    },
    {
      path: '/create-devoir',
      name: 'create-devoir',
      component: () => import('../views/enseignants/devoirs/createDevoir/CreateDevoirPage.vue'),
    },
    {
      path: '/devoirs-list',
      name: 'list-devoir',
      component: () => import('../views/enseignants/devoirs/devoirsList/DevoirsListPage.vue'),
    },
    {
      path: '/show-devoir',
      name: 'show-devoir',
      component: () => import('../views/enseignants/devoirs/showDevoir/ShowDevoirPage.vue'),
    },
    {
      path: '/submits-list',
      name: 'submits-list',
      component: () => import('../views/enseignants/soumissions/SoumissionPage.vue'),
    },
    {
      path: '/send-message',
      name: 'send-message',
      component: () => import('../views/messagerie/SendMsgPage.vue'),
    },
    {
      path: '/receive-message',
      name: 'receive-message',
      component: () => import('../views/messagerie/ReceiveMsgPage.vue'),
    },
    // {
    //   path: '/create-devoir',
    //   name: 'create-devoir',
    //   component: () => import('../views/enseignants/devoirs/createDevoir/CreateDevoirPage.vue'),
    // },
    // {
    //   path: '/devoirs-list',
    //   name: 'list-devoir',
    //   component: () => import('../views/enseignants/devoirs/devoirsList/DevoirsListPage.vue'),
    // },
    // {
    //   path: '/submits-list',
    //   name: 'submits-list',
    //   component: () => import('../views/enseignants/soumissions/SoumissionPage.vue'),
    // },
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
