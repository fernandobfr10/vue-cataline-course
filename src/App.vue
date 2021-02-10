<template>
  <div>
    <ul>
      <!-- Diretiva v-for é usada para criar loops e renderizar listas no html -->
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    products: [
      { id: 1, name: 'Camisa', stock: true },
      { id: 2, name: 'Bota', stock: false },
      { id: 3, name: 'Chapéu', stock: false },
      { id: 4, name: 'Cinto', stock: true }
    ]
  })
})
</script>

<style></style>
