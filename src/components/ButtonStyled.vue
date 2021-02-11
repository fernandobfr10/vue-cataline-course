<template>
  <!-- O $emit pode receber 2 parâmetros, o 1 é o nome do evento e o 2 são os dados que nós queremos transmitir para quem estiver ouvindo o evento -->
  <button @click="$emit('onClick', $event)">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    name: ''
  }),
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
button {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
</style>
