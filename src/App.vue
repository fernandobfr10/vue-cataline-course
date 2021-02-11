<template>
  <ButtonStyled />
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

<style scoped>
/* Só é possível estilizar o componente filho, na tag principal do componente, não pegando as tags filhas do mesmo */
.button-styled {
  position: absolute;
  top: 50%;
}

/* Para estilizar uma tag que seja filha da principal do componente, devemos usar a anotação de estilização profunda, exemplo abaixo */
::v-deep.button-styled span {
  color: #000;
}
</style>
