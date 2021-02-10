<template>
  <div>
    <!-- A diretiva v-if serve para determinar uma condição para a tag ser ou não renderizada -->

    <!-- Irá renderizar -->
    <h1 v-if="true">Hello World</h1>

    <!-- Não irá renderizar -->
    <h1 v-if="false">Hello World</h1>

    <!-- Exemplo mais dinâmico -->
    <h1 v-if="sex === 'Masculino'">Masculino</h1>
    <h1 v-if="sex === 'Feminino'">Feminino</h1>

    <!-- Utilizando if e else -->
    <!-- Para isso funcionar, o if e o else devem estar uma seguida do outra, caso contrário, o Vue não entenderá -->
    <h1 v-if="sex === 'Masculino'">Masculino</h1>
    <h1 v-else>Feminino</h1>

    <!-- Utilizando if, else-if e else -->
    <!-- Para isso funcionar, o if, else-if e else devem estar uma seguida da outra, caso contrário, o Vue não entenderá -->
    <h1 v-if="sex === 'Masculino'">Masculino</h1>
    <h1 v-else-if="sex === 'Feminino'">Feminino</h1>
    <h1 v-else>Outro</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    sex: 'Outro'
  })
})
</script>

<style></style>
