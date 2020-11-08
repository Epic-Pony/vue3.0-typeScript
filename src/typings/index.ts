/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-08 22:30:58
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-08 22:34:29
 */
interface ITodo {
    id: number,
    content: string,
    status:Todo_status
}

interface IState {
    list: ITodo[],
}

enum Todo_status {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
} 

export {
    ITodo,
    IState,
    Todo_status,
}