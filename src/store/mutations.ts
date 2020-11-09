/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:49:53
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-09 22:25:54
 */
import { IState, ITodo, Todo_status } from '@/typings'
import { REMOVE_TODO, SET_TODO_STATUS, SET_TODO, SET_TODO_LIST, SET_DOING_STATUS } from './actionTypes'
export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        // state.list.unshift(todo)
        state.list = [...state.list,todo]; //重新组合一个数组
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id)
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case Todo_status.FINISHED:
                        item.status = Todo_status.WILLDO;
                        break;
                    case Todo_status.WILLDO:
                    case Todo_status.DOING:
                        item.status = Todo_status.FINISHED;
                        break;
                    default:
                        break;
                }
            }
            return item
        })
    },
    [SET_DOING_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {

            if (item.id == id) {
                item.status == Todo_status.DOING ? item.status = Todo_status.WILLDO : item.status = Todo_status.DOING;
            } else {
                //正在做只能有一件事情 所以当选择一件事情正在做的时候其他的正在做就要停止
                if (item.status == Todo_status.DOING) {
                    item.status = Todo_status.WILLDO;
                }
            }
            return item
        })
    }
}