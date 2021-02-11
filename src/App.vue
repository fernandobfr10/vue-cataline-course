<template>
  <!-- Ficamos escutando o componente, e quando o evento onClick acontecer no componente, execute a ação informada, no caso action -->
  <button-styled text="Botão" @onClick="capturarEvent($event)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled },
  data: () => ({}),
  methods: {
    capturarEvent(event: string) {
      console.log(event)
    }
  }
})
</script>

<style></style>
