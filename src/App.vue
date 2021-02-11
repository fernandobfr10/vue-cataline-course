<template>
  <!-- Usando o componente ButtonStyled -->
  <button-styled />

  <!-- O botão abaixo não irá receber a customização do ButtonStyled, pois no ButtonStyled informamos a palavra scoped na tag Style -->
  <!-- Com isso, acustomização fica somente presa ao escopo do componente -->
  <button>Login</button>
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
