<template>
  <button @click="show = !show">Toggle</button>

  <!-- O elemento que receberá a transition,deverá ficar envolvido na tag transition e toda a mágica deverá ser feita na tag style -->
  <transition>
    <h1 v-if="show">Cataline</h1>
  </transition>

  <!-- Quando existe mais de uma animação no componente, deve se dar nomes para manipular de forma correta cada uma delas -->
  <transition name="fade">
    <h1 v-if="show">Cataline</h1>
  </transition>

  <transition name="scale">
    <h1 v-if="show">Cataline</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    show: false
  })
})
</script>

<style>
/* 
v-enter-from (de onde esta vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde esta vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name` - Quando trabalhamos com mais de uma animação, devemos dar nomes para elas exemplo do html
*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.scale-enter-from,
.scale-leave-to {
  scale: 0%;
}

.scale-enter-active,
.scale-leave-active {
  transition: scale 0.5s;
}
</style>
