require('dotenv').config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components:[{
    path:'@/shared/icons', prefix:'Icon'
  },
  '@/components'
],
  alias: {
    css: '/<rootDir>/assets/css'
  },
  app: {
    // baseURL: 'http://jose:3000'
  },
  css: ["@/assets/css/main.css"],
});
