import { addTodo } from './helper';

describe('addTodo', () => {
    it('should add a new todo task to the list', () => {
        const startTodos = [
            {id: 1, task: "My first Todo", completed: false},
            {id: 2, task: "My second Todo", completed: false}
        ]
        const newTodo = {id: 3, task: "My third Todo", completed: false};
        const expected = [
            {id: 3, task: "My third Todo", completed: false},
            {id: 1, task: "My first Todo", completed: false},
            {id: 2, task: "My second Todo", completed: false}
        ]

        const result = addTodo(startTodos, newTodo)
        expect(result).toEqual(expected)
    });

    it('should not mutate the existing todo array', () => {
        const startTodos = [
            {id: 1, task: "My first Todo", completed: false},
            {id: 2, task: "My second Todo", completed: false}
        ]
        
        const newTodo = {id: 3, task: "My third Todo", completed: false}
        const result = addTodo(startTodos, newTodo)
        
        expect(result).not.toBe(startTodos)
     })
})