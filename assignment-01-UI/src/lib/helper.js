/**
 * addTodo
 *
 * @param {Array} list
 * @param {Object} item
 */
export const addTodo = (list, item) => [item, ...list];

//export const generateId = ()=> Math.floor(Math.random() * 100000)