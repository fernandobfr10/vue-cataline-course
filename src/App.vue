<template>
  <button @click="show = !show">Toggle</button>
  <!-- Alterando o nome padrão, de v-enter-active para entrada e de v-leave-active para saida -->
  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideInRight"
    @after-enter="action"
  >
    <h1 v-if="show">Cataline</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data: () => ({
    show: false
  }),
  methods: {
    action(element: HTMLElement) {
      element.classList.add('test')
    }
  }
})
</script>

<style>
.test {
  background: green;
}
</style>
