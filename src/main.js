/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Router
import router from '@/router/router.js'

//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

const app = createApp(App)
app.use(router)
app.use(pinia)

registerPlugins(app)

app.mount('#app')
// Note: remote sync is opt-in. To enable remote loading set `store.remoteSync = true`
// and then call `store.loadProperties()` from a user action or admin panel.
