import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index';
import vuex from './store/index'
import { Swipe, SwipeItem } from 'vant';

const app = createApp(App);

app.use(router);
app.use(vuex);
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')
