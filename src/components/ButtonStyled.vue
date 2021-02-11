<template>
  <button :class="['button-styled', color]">{{ text }} - {{ user }}</button>
</template>

<script lang="ts">
// Importando o tipo da proprieda,com PropType
import { defineComponent, PropType } from 'vue'

// Tipando o que é esperado receber na prop color, uma das opções abaixo
type color = 'primary' | 'success' | 'danger'

// Criando a interface User, para informar quais propriedas esperam receber que tipo de dados
interface User {
  id: number
  name: string
}

export default defineComponent({
  props: {
    text: {
      type: [String, Number], // O tipo de dado que a prop poderá receber somente poderá ser String ou Number
      required: true // Informando que a prop é obrigatória
      // default: 'Texto Padrão' // O parâmetro default deve ser usado para quando não existir required, aí teremos um valor default para a prop
    },
    color: {
      type: String,
      default: 'primary',
      // Validando se o valor recebido é um dos esperados, Primary, Success ou Danger
      validator: (value: color) => {
        return ['primary', 'success', 'danger'].includes(value)
      }
    },
    user: {
      // Informando que a prop user é do tipo User, indicado na criação da interface User acima
      type: Object as PropType<User>,
      required: true
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
