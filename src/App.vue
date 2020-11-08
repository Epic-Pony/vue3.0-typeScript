<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:46:50
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 22:16:28
-->
<template>
  <div class="wrapper">
    Vue3.0+TypeScript
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TodoInput from  './components/TodoInput/index.vue';
import TodoList from  './components/TodoList/index.vue';

export default defineComponent({
  name:"App",
  components: {
    TodoInput,
    TodoList,
  },
})
</script>
<style lang="less">

</style>
