import React from "react";
import { Todo } from "../models/todos";
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="todos">
            {todos.map((todo, index) => (
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={index} /> 
            ))}
        </div>
    )
}

export default TodoList;