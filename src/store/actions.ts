/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 21:50:01
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 22:44:09
 */
import { SET_TODO } from './actionTypes'
import { Commit } from 'vuex'
import { IState,ITodo } from '@/typings'
interface ICtx {
    commit: Commit,
    state?:IState //可选项目
}

export default {
    [SET_TODO]({ commit,state }:ICtx,todo: ITodo) {
        commit(SET_TODO,todo)
    }
}