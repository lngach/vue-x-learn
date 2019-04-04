<template>
  <div>
    <div v-for="item in todos" :key="item.id">
      <TodosItem :todo="item" v-on:del-todo="$emit('del-todo', item.id)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TodosItem from '@/components/Todos/TodosItem.vue'

interface ITodosItem {
  id: Int32Array
  title: string
  completed: boolean
}

@Component({
  components: {
    TodosItem,
  },
})
export default class TodosList extends Vue {
  @Prop() private todos!: ITodosItem[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
