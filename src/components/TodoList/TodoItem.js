import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox} from "react-icons/md";
import "../../styles/style.css"
import {Button} from "react-bootstrap";

const TodoItem = ({todo, onRemove, onToggle}) => {

    const {id, text, isDone} = todo;

    const bgStyle ={
        backgroundColor : id%2===0 ? "#dee2e6" : "#f8f9fa"
    }

    return (
        <div className="todoItemBox" style={bgStyle}>
            <div onClick={() => onToggle(id)} className="todoCheckBox">
                {isDone ?
                    <MdCheckBox size="1.5em" className="todoCheckBtn" /> :
                    <MdCheckBoxOutlineBlank size='1.5em' className="todoCheckBtn"/>}
            </div>
            <div className="todoTitleBox">{text}</div>
            <div className="todoRemoveBox">
                <Button onClick={() => onRemove(id)} variant="secondary" size="sm">삭제</Button>
            </div>
        </div>
    );
};

export default TodoItem;
