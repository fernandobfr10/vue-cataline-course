<template>
  <a :href="product.url" :class="productClass">
    {{ product.name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    product: {
      name: 'Camisa',
      url: 'http://loja.com/produtos/12345',
      stock: true
    }
  }),
  computed: {
    productClass(): string {
      return this.product.stock ? 'success' : 'danger'
    }
  }
})
</script>

<style scoped>
.success {
  color: green;
}

.danger {
  color: red;
}
</style>
