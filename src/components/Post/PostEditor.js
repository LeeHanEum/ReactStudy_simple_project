import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import '../../styles/postStyle.css'

const PostEditor = ({onCreate}) => {

    const [state, setState] = useState({
        title : "",
        writer : "",
        content : ""
    });

    const onSubmit = () => {
        onCreate(state.title, state.writer, state.content);
        alert("저장 성공")
        setState({
            title: "",
            writer: "",
            content: "",
        })
    }

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="editor_box">
            <h4 style={{fontWeight : "bold"}}>게시글 작성</h4>
            <Form>
                <Form.Control
                    className="title_input"
                    type="text"
                    name="title"
                    value={state.title}
                    placeholder="제목을 입력하세요."
                    onChange={handleChangeState}
                />
                <Form.Control
                    className="writer_input"
                    type="text"
                    name="writer"
                    value={state.writer}
                    placeholder="작성자"
                    onChange={handleChangeState}
                />
                <Form.Control
                    className="text_input"
                    as="textarea"
                    rows={5}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                />
                <Button variant="primary" className="submit_btn" onClick={onSubmit}>저장</Button>
            </Form>
        </div>
    );
};

export default PostEditor;
