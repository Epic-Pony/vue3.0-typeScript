/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:50:01
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-09 21:54:57
 */
import { REMOVE_TODO, SET_DOING_STATUS, SET_TODO, SET_TODO_LIST,SET_TODO_STATUS } from './actionTypes'
import { Commit } from 'vuex'
import { IState,ITodo } from '@/typings'
interface ICtx {
    commit: Commit,
    state?:IState //可选项目
}

export default {
    [SET_TODO]({ commit,state }:ICtx,todo: ITodo): void {
        commit(SET_TODO,todo);
    },
    [SET_TODO_LIST]({ commit }: ICtx,todoList: ITodo[]): void {
        commit(SET_TODO_LIST,todoList);
    },
    [REMOVE_TODO]({ commit }: ICtx,id: number): void {
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }: ICtx,id: number): void {
        commit(SET_TODO_STATUS, id);
    },
    [SET_DOING_STATUS]({ commit }: ICtx,id: number): void {
        commit(SET_DOING_STATUS,id)
    }
}