import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'

import './styles/index.css'


const routes = setupLayouts(generatedRoutes)
const auth0 = createAuth0({
  domain: "dev-t4u8li5g.us.auth0.com",
  client_id: "MO1rkiTWTiNNSG1k4ly3t9KSx5AOfaR2",
  redirect_uri: 'http://localhost:3000/home'
})

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
    App,
    { routes, base: import.meta.env.BASE_URL },
    ({ app }) => {
      // install plugins etc.
      app.use(auth0)
    },
  )
  


