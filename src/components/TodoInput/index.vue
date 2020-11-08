<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 22:01:01
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 23:03:46
-->
<template>
  <div>
      <input 
       type="text"
       v-model="todoValue"
       @keyup="setTodoValue"
      />
  </div>
</template>

<script lang="ts">
import { Todo_status } from '@/typings';
import { defineComponent,ref } from 'vue'
import { IUseTodo, useTodo }  from '@/hooks'
export default defineComponent({
    name:'TodoInput',
    setup() {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();
        const setTodoValue = (e: KeyboardEvent): void => {
            if(e.keyCode === 13 && todoValue.value.trim().length) {
                //设置数据
                setTodo(todoValue.value)
                todoValue.value = '';
            }
        };
        return { 
            todoValue,
            setTodoValue, 
        }
    },

})
</script>

<style>

</style>