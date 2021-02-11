<template>
  <ButtonStyled text="Facebook">
    <!-- Esse ícone abaixo, importado do fontawesome, ocupará o lugar do slot sem ser NAMED dentro do componente ButtonStyled -->
    <i class="fab fa-facebook-f"></i>
  </ButtonStyled>
  <hr />
  <ButtonStyled text="Facebook">
    <!-- Esse ícone abaixo, importado do fontawesome, ocupará o lugar do slot de nome before dentro do componente ButtonStyled -->
    <template v-slot:before>
      <i class="fab fa-facebook-f"></i>
    </template>
  </ButtonStyled>
  <hr />
  <ButtonStyled text="Facebook">
    <!-- Esse ícone abaixo, importado do fontawesome, ocupará o lugar do slot de nome after dentro do componente ButtonStyled -->
    <template v-slot:after>
      <i class="fab fa-facebook-f"></i>
    </template>
  </ButtonStyled>
  <hr />
  <ButtonStyled text="Facebook">
    <!-- Esse ícone abaixo, importado do fontawesome, ocupará o lugar do slot de nome after dentro do componente ButtonStyled -->
    <template v-slot:after>
      <i class="fab fa-facebook-f"></i>
    </template>
    <template v-slot:before>
      <i class="fab fa-facebook-f"></i>
    </template>
  </ButtonStyled>
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
