import React, { useRef, useState} from 'react';
import "../../App.css";
import TodoInsert from "./TodoInsert";
import TodoItem from "./TodoItem";

const TodoList = () => {

    let nextId = useRef(3);

    const [todos, setTodos] = useState([
        {
            id : 0,
            text : "리액트 공부하기",
            isDone : true
        }, // 배열 안에 각각의 객체 원소가 나열되어 있음.
        {
            id : 1,
            text : "스프링 공부하기",
            isDone : false
        },
        ]);

       const onInsert = (text) => {
           if(nextId.current === 9){
               alert("오늘의 할 일은 9개까지만 입력 가능합니다.");
               return;
           }
        const todo = {
            id : nextId.current++,
            text,
            isDone : false
        }
        setTodos(todos.concat(todo));
       }


    const onRemove = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    }

    const onToggle = (id) => {
        const updateTodos = todos.map(todo => todo.id === id ? {...todo, isDone : !todo.isDone} : todo);
        setTodos(updateTodos);
    }


    return (
        <div className="App todoContainer">
            <div className="todoHeader">Today's To Do List</div>
            <TodoInsert onInsert={onInsert}/>
            {todos.map(todo =>(
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
};

export default TodoList;
