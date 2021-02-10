<template>
  <!-- A diretiva v-once, impede que a associação de dados seja reativa onde ele for utilizada -->
  <p v-once>Estoque Inicial: {{ stock }}</p>
  <p>Estoque Atualizado: {{ stock }}</p>

  <button @click="stock++">Aumentar Estoque</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    stock: 1
  })
})
</script>

<style></style>
