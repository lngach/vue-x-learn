<template>
  <div class="home">
    <AddTodos v-on:add-todo="addTodo"/>
    <TodosList :todos="todos" v-on:del-todo="removeTodo"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TodosList from '@/components/Todos/TodosList.vue' // @ is an alias to /src
import AddTodos from '@/components/Todos/AddTodos.vue' // @ is an alias to /src
import axios from 'axios'

@Component({
  components: {
    AddTodos,
    TodosList,
  },
})
export default class Home extends Vue {
  /**
   * data
   */
  public data(): object {
    return {
      todos: [],
    }
  }

  public async created() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      )
      ;(this as any).todos = await response.data
    } catch (error) {
      ;(this as any).todos = []
    }
  }

  public async removeTodo(id: string) {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      )
      ;(this as any).todos = (this as any).todos.filter(
        (todo: any) => todo.id !== id
      )
    } catch (error) {
      return
    }
  }

  public async addTodo(todo: object) {
    try {
      const { title, completed }: any = todo
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title,
          completed,
        }
      )
      ;(this as any).todos = [...(this as any).todos, await res.data]
    } catch (error) {
      return
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>

