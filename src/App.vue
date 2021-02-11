<template>
  <ButtonStyled text="Login" color="primary" />
  <ButtonStyled text="Login" color="success" />
  <ButtonStyled text="Login" color="danger" />
  <ButtonStyled text="Login" />
  <ButtonStyled text="Login" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled },
  data: () => ({
    user: {
      id: 1,
      name: 'Fernando'
    }
  })
})
</script>

<style></style>
