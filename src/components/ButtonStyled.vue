<template>
  <!-- Essa tag slot será substituída por qualquer conteúdo onde o ButtonStyled for utilizado, neste caso iremos substituir por um icon -->
  <button :class="['button-styled', color]"><slot /> {{ text }}</button>

  <!-- Usando slots nomeados - Named Slots -->
  <button :class="['button-styled', color]">
    <slot name="before" />
    {{ text }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type color = 'primary' | 'success' | 'danger'

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: 'primary',

      validator: (value: color) => {
        return ['primary', 'success', 'danger'].includes(value)
      }
    }
  }
})
</script>

<style>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.primary {
  background-color: #2d6cea;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}
</style>
