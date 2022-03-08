import React from "react";
import './styles.css';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodo: (e: React.FormEvent) => void
}

const InputField:React.FC<Props> = ({todo, setTodo, addTodo}) => {
    
    
    return (
    <div>
        <form className="input" onSubmit={(e) => addTodo(e)}>
            <input
                value={todo}
                onChange={
                    (e) => setTodo(e.target.value)
                }

                type="text" 
                className="input__box" 
                placeholder="Enter Task" 
            />
            <button className="input__submit" type="submit">Go</button>
        </form>
    </div>
    );
}

export default InputField; 