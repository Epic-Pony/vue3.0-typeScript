<!--
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 22:01:41
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-09 22:06:32
-->
<template>
  <div>
    <input 
      type="checkbox" 
      :checked="todoItem.status == FINISHED"
      @click="setStatus(todoItem.id)"
    >
    <span 
      :class="todoItem.status === FINISHED&&'line-through'"
    >
      {{todoItem.content}}
    </span>
    <button @click="removeTodo(todoItem.id)">删除</button>
    <!-- 马上做 -->
    <button 
      v-if="todoItem.status != FINISHED"
      @click="setDoing(todoItem.id)"
      :class="todoItem.status === DOING ? 'doing' : 'willdo'"
    >
      {{todoItem.status === DOING ? '正在做...' : '马上做'}}
    </button>
  </div>
</template>

<script lang="ts">
import { ITodo, Todo_status } from '@/typings'
import { defineComponent, onMounted, PropType } from 'vue'
interface IStatusState {
  DOING: Todo_status,
  WILLDO: Todo_status,
  FINISHED: Todo_status
}

export default defineComponent({
    name:'TodoItem',
    props: {
      todoItem:Object as PropType<ITodo>
    },
    setup(props,{ emit }) {
      const statusState = <IStatusState>{
        DOING: Todo_status.DOING,
        WILLDO: Todo_status.WILLDO,
        FINISHED: Todo_status.FINISHED,
      }

      const removeTodo = (id:number): void => {
        emit('removeTodo',id);
      }

      const setStatus = (id:number): void => {
        emit('setStatus', id);
      }

      const setDoing = (id:number): void => {
        emit('setDoing', id);
      }

      return {
        ...statusState,
        removeTodo,
        setStatus,
        setDoing,
      }
    }
    
})
</script>

<style>
  .line-through {
    text-decoration: line-through;
  }
  .doing {
    background-color: #ededed;
    color:#999;
  }
  .willdo {
    background-color: orange;
    color:#fff;
  }
</style>