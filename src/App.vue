<template>
  <div>
    <p>{{ company }} é legal</p>

    <!-- Utilizando v-text o conteúdo vindo de data pega o lugar do conteúdo que a tag receberia, não sendo possível concatenar como fiz acima -->
    <p v-text="company"></p>

    <!-- Irá dar erro -->
    <p v-text="company">é legal</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    company: 'Cataline'
  })
})
</script>

<style></style>
