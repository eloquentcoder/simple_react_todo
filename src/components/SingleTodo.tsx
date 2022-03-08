import React, { useRef, useState } from "react"
import { Todo } from "../models/todos";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

  const [isEditing, setIsEditing] = useState<boolean>();
  const [editingTodo, setEditingTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone:!todo.isDone}: todo))
  }

  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEditing = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => todo.id === id ? {...todo, todo: editingTodo} : todo))
    setIsEditing(false);
  }

      return (
        <form className="todos__single" onSubmit={(e) => handleEditing(e, todo.id)}>
          {isEditing ? (
              <input
              value={editingTodo}
              onChange={(e) => setEditingTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) :
            todo.isDone ? 
            (<s className="todos__single--text">{todo.todo}</s>) : 
            (<span className="todos__single--text">{todo.todo}</span>)
          }
            
            <div>
            <span
              className="icon" 
              onClick={() => {
                if (!isEditing && !todo.isDone) {
                  setIsEditing(!isEditing);
                }
              }}
              >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
    );
}

export default SingleTodo;


