import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import VueCookies from "vue-cookies";
import base64 from 'base-64';
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueCookies)
app.use(base64)
app.mount('#app')
