import { createApp } from 'vue'
import App from './App.vue'

// Import styles in correct order
import './assets/styles/reset.css'
import './assets/styles/main.css'
import './assets/styles/utilities.css'

createApp(App).mount('#app')
