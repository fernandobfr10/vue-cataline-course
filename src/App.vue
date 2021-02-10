<template>
  <div>
    <div>
      <h1>Eventos de Click</h1>

      <!-- Utilizando o argumento Click na diretiva v-on -->
      <a href="#interno" @click="doSomenthing">Link Interno</a>

      <!-- Utilizando modificadores na diretiva -->
      <!-- Prevent - Previne o comportamento padrão -->
      <a href="#interno" @click.prevent="doSomenthing">Link Interno</a>

      <!-- Once - Diz que somente será executado uma vez -->
      <a href="#interno" @click.once="doSomenthing">Link Interno</a>

      <!-- Modificadores podem ser combinados -->
      <!-- Abaixo além de previnir o comportamento padrão, somente irá acontecer uma vez também a ação -->
      <a href="#interno" @click.prevent.once="doSomenthing">Link Interno</a>
    </div>
    <div>
      <h1>Eventos de key</h1>

      <!-- Utilizando o argumento Keyup na diretiva v-on -->
      <input type="text" @keyup="doSomenthing" />

      <!-- Utilizando modificadores na diretiva -->
      <!-- Enter - Só ocorrer a ação doSomenthing quando o ENTER for pressionado -->
      <!-- Isso funciona para qualquer tecla -->
      <input type="text" @keyup.enter="doSomenthing" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({}),
  methods: {
    doSomenthing() {
      console.log('Hello Cataline')
    }
  }
})
</script>

<style></style>
