import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "../../styles/postStyle.css"
import {Button} from "react-bootstrap";

const PostEditor = ({onCreate}) => {

    const [state, setState] = useState({
        title : "",
        writer : "",
        content : "",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    const onsubmit = () => {
        onCreate(state.title, state.writer, state.content);
        alert("저장 성공")
        setState({
            title : "",
            writer : "",
            content : "",
        });
    }

    return (
        <div className="editor_box">
            <h4 style={{fontWeight : "bold"}}>게시글 작성</h4>
            <Form>
                <Form.Control
                    type="text"
                    placeholder="제목을 입력하세요."
                    className="title_input"
                    name="title"
                    onChange={handleChangeState}
                    value={state.title}
                />
                <Form.Control
                    type="text"
                    placeholder="작성자"
                    className="writer_input"
                    name="writer"
                    onChange={handleChangeState}
                    value={state.writer}
                />
                <Form.Control
                    as="textarea"
                    rows={5}
                    className="text_input"
                    name="content"
                    onChange={handleChangeState}
                    value={state.content}
                />
                <Button variant="primary" className="submit_btn" onClick={onsubmit}>저장</Button>
            </Form>
        </div>
    );
};

export default PostEditor;
