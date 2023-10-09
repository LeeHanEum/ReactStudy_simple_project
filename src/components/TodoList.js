import React, {useRef, useState} from 'react';
import "../App.css";
import TodoInsert from "./TodoInsert";
import TodoItem from "./TodoItem";

const TodoList = () => {

    let nextId = useRef(2);

    const [todos, setTodos] = useState([
        {
            id : 0,
            title : "리액트 공부하기",
            isDone : true
        }, // 배열 안에 각각의 객체 원소가 나열되어 있음.
        {
            id : 1,
            title : "스프링 공부하기",
            isDone : false
        },
        ]);

       const onInsert = (title) => {
           if(nextId.current === 9){
               alert("오늘의 할 일은 9개까지만 입력 가능합니다.");
               return;
           }
        const todo = {
            id : nextId.current++,
            title,
            isDone : false
        }
        setTodos(todos.concat(todo));
       }

    const onRemove = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        for(let i = 0; i < updateTodos.length; i++){
            updateTodos[i].id = i;
        }
        nextId.current--;
        setTodos(updateTodos);
    }// 기존 todoList 배열은 두고, 새로운 todoList 배열을 만들어서 그게 완성되면 그냥 치환.

    const onToggle = (id) => {
        const updateTodos = todos.map(todo => todo.id === id ? {...todo, isDone : !todo.isDone} : todo);
        setTodos(updateTodos);
    } // 일단 반복을 하고 매개변수로 넘겨진 id랑 일치하는 걸 찾으면 그거의 완료 여부를 바꿔.


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
