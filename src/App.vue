<template>
  <form>
    <!-- Modificadores para a diretiva v-model -->
    <!-- Lazy (Delay) - Só irá fazer o bind quando sair do campo que foi editado -->
    <!-- Trim - Irá remover espaços existente no início e no fim de uma string -->
    <input type="text" placeholder="Nome" v-model.lazy.trim="name" />

    <!-- Number - Irá converter a string para number -->
    <input type="number" placeholder="Idade" v-model.number="age" />

    <textarea rows="2" placeholder="Descrição" v-model="message"></textarea>

    <input type="checkbox" v-model="newsletter" /> Newsletter <br />

    <input type="radio" name="color" value="vermelho" v-model="color" />
    Vermelho
    <input type="radio" name="color" value="verde" v-model="color" /> Verde
    <input type="radio" name="color" value="azul" v-model="color" /> Azul

    <select v-model="fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="morango">Morango</option>
    </select>
  </form>

  <p>Nome: {{ name }}</p>
  <p>Idade: {{ age }}</p>
  <p>Mensagem: {{ message }}</p>
  <p>Newsletter: {{ newsletter }}</p>
  <p>Cor: {{ color }}</p>
  <p>Fruta: {{ fruit }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    name: '',
    age: 0,
    message: '',
    newsletter: false,
    color: '',
    fruit: ''
  })
})
</script>

<style scoped>
input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
</style>
