<template>
  <button @click="show = !show">Toggle</button>
  <!-- Usando o appear para iniciar a animação no carregamento da página,de acordo com o boolean do state show, dentro de data -->
  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideInRight"
    :appear="show"
  >
    <h1 v-if="show">Cataline</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data: () => ({
    show: true
  })
})
</script>

<style></style>
