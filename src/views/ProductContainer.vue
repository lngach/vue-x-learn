<template>
  <div class="about">
    <router-link to="/products/new">New</router-link>
    <Products/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Products from '@/components/Products/Products.vue' // @ is an alias to /src

@Component({
  components: {
    Products,
  },
})
export default class ProductContainer extends Vue {}
</script>