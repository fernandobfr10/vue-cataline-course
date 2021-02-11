<template>
  <!-- Criando classes baseando-se no estado do data -->
  <!-- Adicionando a clase active quando o isActive for true, se for false, ela não será aplicada -->
  <!-- Adicionando a clase text-danger quando a hasError for true, se for false, ela não será aplicada -->
  <h1 class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Hello World
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    isActive: true,
    hasError: false
  })
})
</script>

<style></style>
