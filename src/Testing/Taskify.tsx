import './Taskify.css';
import InputField from './InputField';
import { useState } from 'react';
import {Todo} from './Model';
import TodoList from './TodoList';


export const Taskify = () => {
    
    const [todo, setTodo] = useState<string>("");
    const [todos, settodos] = useState<Todo[]>([]);

    const handleAdd = ( e : React.FormEvent ) => {
        e.preventDefault();

        if(todo){
            settodos([...todos, {id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    }
    console.log(todos);
    return(
        <div className='container'>
            <h2 className='heading'> Welcome To Taskfy</h2>
            <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd} />
            <TodoList todos={todos} settodos = {settodos}/>
        </div>
    )
}