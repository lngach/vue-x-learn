<template>
  <div>
    <form @submit="addTodo">
      <input type="text" name="title" v-model="title" id="title" placeholder="Add todo...">
      <input type="submit" value="Add" class="btn">
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class AddTodos extends Vue {
  public data() {
    return {
      title: '',
    }
  }

  public addTodo(e: Event) {
    e.preventDefault()
    const newTodo = {
      title: (this as any).title,
      completed: false,
    }
    this.$emit('add-todo', newTodo)
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
}
input[type='text'] {
  flex: 10;
  padding: 5px;
}
input[type='submit'] {
  flex: 2;
}
</style>


