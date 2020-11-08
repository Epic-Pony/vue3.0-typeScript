/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 22:47:22
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 23:01:36
 */
import store from '@/store'
import { SET_TODO } from '@/store/actionTypes'
import { ITodo, Todo_status } from "@/typings"
import { Store, useStore } from 'vuex'


export interface IUseTodo {
    setTodo: (value: string) => void,
    setToList: () => void,
    removeTodo: () => void,
    setStatus: () => void,
    setDoing: () => void,
}

function useTodo(): IUseTodo {
    
    const store: Store<any> = useStore();

    function setTodo(value: string): void {
        const todo: ITodo =  {
            id: new Date().getTime(),
            content: value,
            status: Todo_status.WILLDO
        }
        store.dispatch(SET_TODO, todo)
    }

    function setToList() {

    }

    function removeTodo() {

    }

    function setStatus() {

    }

    function setDoing() {

    }
    
    return { 
        setTodo,
        setToList,
        removeTodo,
        setStatus,
        setDoing,
     }
}
export {
    useTodo,
}