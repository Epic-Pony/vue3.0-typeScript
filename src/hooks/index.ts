/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 22:47:22
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-09 22:30:48
 */
import store from '@/store'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS } from '@/store/actionTypes'
import { ITodo, Todo_status } from "@/typings"
import { watch } from 'vue';
import { Store, useStore } from 'vuex'


export interface IUseTodo {
    setTodo: (value: string) => void,
    setToList: () => void,
    removeTodo: (id: number) => void,
    setStatus: (id: number) => void,
    setDoing: (id: number) => void,
}
export interface IUseLocalStorage {
    getLocalList: () => ITodo[],
    setLocalList: (todoList: ITodo[]) => void,
}

function useTodo(): IUseTodo {

    const store: Store<any> = useStore();
    const { getLocalList, setLocalList, } = userLocalStorage();
    const todoList: ITodo[] = getLocalList();

    watch(() => store.state.list , (todoList) => setLocalList(todoList));

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: Todo_status.WILLDO
        }
        store.dispatch(SET_TODO, todo)
        // setLocalList(store.state.list)
    }

    function setToList() {
        //在缓存中拿到参数存储
        store.dispatch(SET_TODO_LIST, todoList)

    }

    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
        //每次删除更新下本地缓存
        //    setLocalList(store.state.list);
    }

    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS, id);
        //每次删除更新下本地缓存
        // setLocalList(store.state.list);
    }

    function setDoing(id: number): void {
        store.dispatch(SET_DOING_STATUS, id);
        //每次删除更新下本地缓存
        //   setLocalList(store.state.list);
    }

    return {
        setTodo,
        setToList,
        removeTodo,
        setStatus,
        setDoing,
    }
}

function userLocalStorage(): IUseLocalStorage {


    function getLocalList(): ITodo[] {

        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList,
    }
}

export {
    useTodo,
}