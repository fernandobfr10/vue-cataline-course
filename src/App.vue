<template>
  <!-- v-highlight nome da diretiva criada, background é o nome do argumento e shadow é o modificador -->
  <h1 v-highlight:background.shadow="'#84E'">Hello World</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({}),
  directives: {
    highlight: {
      beforeMount(element: HTMLElement, binding) {
        console.log(element) // Elemento - É o elemento em que adiretiva está sendo usada
        console.log(binding.arg) // Argumento - No caso do exemplo é o argumento background
        console.log(binding.modifiers) // Modificaor - No caso do exemplo é o modificador shadow
        console.log(binding.value) // Valor - No caso do exemplo é a cor hexadecimal '#84E'

        if (binding.arg === 'background') {
          element.style.background = binding.value
        } else {
          element.style.color = binding.value
        }

        if (binding.modifiers.shadow) {
          element.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)'
        }
      }
    }
  }
})
</script>

<style></style>
