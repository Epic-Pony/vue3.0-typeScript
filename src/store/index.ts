/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-11-08 21:46:50
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 22:46:09
 */
import { createStore } from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  mutations,
  actions, 
})
 