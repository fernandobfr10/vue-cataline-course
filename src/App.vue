<template>
  <!-- É parecida com a V-if mas existem duas diferenças -->
  <!-- 1 - Não tem encadeamento de opções como no v-if, ela simplesmente renderiza ou nào renderiza -->
  <!-- 2 - A tag permanece na DOM, apenas é aplicado o display: none, já no v-if, não existe renderização da tag -->
  <h1 v-show="sex === 'Masculino'">Masculino</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    sex: 'Masculino'
  })
})
</script>

<style></style>
