/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:49:53
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 23:03:22
 */
import { IState, ITodo } from '@/typings'
import { SET_TODO } from './actionTypes'
export default {
    [SET_TODO](state: IState,todo: ITodo) {
        state.list.unshift(todo)
        console.log(state.list)
    }
}