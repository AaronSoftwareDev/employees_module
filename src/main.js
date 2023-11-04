import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import your Vuex store

const app = createApp(App);

// Register plugins and use the store
import { registerPlugins } from '@/plugins';
registerPlugins(app);

app.use(store); // Use the Vuex store

app.mount('#app');
