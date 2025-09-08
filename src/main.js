import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routers/router';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css' 

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia)
app.use(Antd);
app.mount('#app');  