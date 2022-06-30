import React from 'react'
import {Todo} from  './Model';

interface props{
    todo: Todo;
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}


const SingleTodo = ( {todo, todos, settodos } : props) => {
  return (
    <div>
        <form>
            <li>{todo.id}</li>
            <li>{todo.todo}</li>   
        </form>

    </div>
  )
}

export default SingleTodo