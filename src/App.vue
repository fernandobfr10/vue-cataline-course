<template>
  <button @click="filterAZ">Filter A - Z</button>
  <button @click="filterZA">Filter Z - A</button>
  <!-- A tag transition padrão só permite animar um único elemento filho, caso precise animar mais de um, deve envolve-los em uma div por exemplo -->
  <!-- Mas se quiser animar um item de cada vez, devemos usar a tag transition-group-->
  <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    :appear="show"
    mode="out-in"
  >
    <!-- A lista abaixo será animada em 3 situações: Adiçao e Remoção de usuário e alteração de posição dos usuários -->
    <!-- Quando se quer animar a alteração de posição, devemos usar uma classe nova, específica do transition-group,chamada .v-move -->
    <li v-for="user in users" :key="user">{{ user }}</li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data: () => ({
    users: ['Fernando', 'Juliana', 'Manoela', 'Davi', 'Arthur']
  }),
  methods: {
    filterAZ() {
      this.users.sort()
    },

    filterZA() {
      this.users.sort().reverse()
    }
  }
})
</script>

<style>
.v-move {
  transition: all 0.5s;
}
</style>
