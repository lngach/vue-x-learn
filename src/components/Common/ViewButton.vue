<template>
  <router-link :to="{name: name, params: {id: id}}" class="btn btn-info">
    <i class="fa fa-search"></i>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class ViewButton extends Vue {
  public data() {
    return {
      name: '',
      id: null,
    }
  }

  public created() {
    ;(this as any).name = (this as any).params.name
    ;(this as any).id = (this as any).params.value
  }
}
</script>
