<template>
  <!-- Usando o componente ButtonStyled -->
  <button-styled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Importando o componente ButtonStyled
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  // Registrando o componente ButtonStyled
  components: { ButtonStyled },
  data: () => ({})
})
</script>

<style></style>
