import React, {useState} from 'react';
import "../styles/style.css"

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }

    return (
        <div className="todoInputBox">
            <form onSubmit={onsubmit}>
                <input
                    type="text"
                    className="todoInput"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"할 일을 입력하고 Enter를 누르세요."}
                />
            </form>
        </div>
    );
};

export default TodoInsert;
