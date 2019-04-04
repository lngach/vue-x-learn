<template>
  <div>{{product.name}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ProductItem extends Vue {
  @Prop() private product!: object
}
</script>