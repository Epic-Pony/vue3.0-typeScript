<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:46:50
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-09 14:03:35
-->
<template>
  <div class="wrapper">
    Vue3.0+TypeScript
    <todo-input></todo-input>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { Store, useStore } from 'vuex';
import TodoInput from  './components/TodoInput/index.vue';
import TodoList from  './components/TodoList/index.vue';
import { IUseTodo, useTodo } from './hooks';

export default defineComponent({
  name:"App",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const { setToList }: IUseTodo = useTodo();
    const store: Store<any> = useStore()

    onMounted(() => {
       setToList();
    })

    return {
      todoList:computed(() => store.state.list),
    }
  }
})
</script>
<style lang="less">

</style>
