<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
    AddTodo,
    Todos
  }
}
</script>

<style>
body{
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background: #e8f7f0;
  line-height: 1.6;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
}
</style>
