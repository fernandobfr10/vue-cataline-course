<template>
  <div>
    <!-- Irá imprimir a string normal, sem compilar para html -->
    <p>Acesse: {{ link }}</p>

    <!-- Assim como a diretiva v-text, o conteúdo da v-html ocupa o lugar do conteúdo da tag, dando erro se feito como abaixo -->
    <!-- <p v-html="link">Acesse:</p> -->

    <!-- Por isso, para dar certo neste caso, teremos que colocar o v-html em uma tag vazia, como abaixo -->
    <p>Acesse: <span v-html="link" /></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    link: '<a href="https://cataline.io">Cataline</a>'
  })
})
</script>

<style></style>
