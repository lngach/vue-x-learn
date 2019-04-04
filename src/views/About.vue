<template>
  <div class="about">
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
export default class About extends Vue {}
</script>