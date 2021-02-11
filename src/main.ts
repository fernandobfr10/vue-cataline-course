import { createApp } from 'vue'
import App from './App.vue'
// Importando o componente de forma global, não é recomendado faz, pois pode deixar a aplicação mais custosa.
import ButtonStyled from '@/components/ButtonStyled.vue'

const app = createApp(App)

app.component('ButtonStyled', ButtonStyled)

app.mount('#app')
