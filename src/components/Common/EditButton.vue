<template>
  <router-link :to="{name: name, params: {id: id}}" class="btn btn-primary">
    <i class="fa fa-edit"></i>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class EditButton extends Vue {
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
