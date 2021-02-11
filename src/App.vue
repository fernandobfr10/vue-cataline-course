<template>
  <!-- Atribuindo as classes nasintaxe de array, sendo static uma classe fixa, e a text-danger uma classe condicional, referente ao hasError -->
  <!-- A classe static será aplicada independente de condição, é uma classe fixa da tag, já a text-danger, somente se hasError retornar true -->
  <!-- A ordem das classes não faz diferença -->
  <h1 :class="['static', { 'text-danger': hasError }]">Hello World</h1>

  <!-- Aplicando uma classe chamada myBackground, que vem de dentro do estado do componente, não é fixa, nem condicional, pode ser passad por prop... -->
  <h1 :class="['static', { 'text-danger': hasError }, className]">
    Hello World
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    isActive: true,
    hasError: false,
    className: 'myBackground'
  })
})
</script>

<style></style>
