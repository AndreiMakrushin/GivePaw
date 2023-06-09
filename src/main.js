
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-indigo/theme.css"; 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import './assets/base.css'
const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router);

app.mount('#app')
