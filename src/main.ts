import './assets/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueSweetalert2 from 'vue-sweetalert2'
import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/img/favicon.png"
// <link
//     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
//     rel="stylesheet"
//   />
import "./assets/plugins/bootstrap/css/bootstrap.min.css"
import "./assets/plugins/feather/feather.css"
import "./assets/plugins/icons/flags/flags.css"
import "./assets/plugins/fontawesome/css/fontawesome.min.css"
import "./assets/plugins/fontawesome/css/all.min.css"
import "./assets/plugins/datatables/datatables.min.css"
import "./assets/plugins/select2/css/select2.min.css"
import "./assets/plugins/summernote/summernote-bs4.min.css"
import "./assets/css/ckeditor.css"
import "./assets/css/style.css"

import "./assets/js/jquery-3.6.0.min.js"
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "./assets/js/feather.min.js"
import "./assets/plugins/slimscroll/jquery.slimscroll.min.js"
import "./assets/plugins/datatables/datatables.min.js"
import "./assets/plugins/apexchart/apexcharts.min.js"
import "./assets/plugins/apexchart/chart-data.js"
import "./assets/plugins/select2/js/select2.min.js"
import "./assets/js/ckeditor.js"
import "./assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js"
import "./assets/plugins/summernote/summernote-bs4.min.js"
import "./assets/js/jquery-ui.min.js"
import "./assets/js/script.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)

const options = {
  // You can set your default options here
};

app.use(Toast, options);
app.use(VueSweetalert2)
app.mount('#app')
