import React from 'react'
import {Todo} from './Model';
import SingleTodo from './SingleTodo';

interface props{
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, settodos} : props) => {
  return (
    <div>
        {todos.map(todo => (
            <SingleTodo todo = {todo} key  = {todo.id} todos = {todos} settodos = {settodos}/>
        ))}
    </div>
  )
}
//
export default TodoList