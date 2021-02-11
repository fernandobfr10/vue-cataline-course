<template>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'Contact'">Contato</li>
    <li @click="view = 'About'">Sobre</li>
  </ul>

  <!-- A propriedade mode serve para ajudar na alternância de elementos -->
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="show"
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({
  components: { Home, About, Contact },
  data: () => ({
    view: 'Home'
  })
})
</script>

<style></style>
