import React, {useState, useRef} from 'react';
import {Button} from "react-bootstrap";

const PostItem = ({id, title, writer, content, create_date, onRemove, onEdit}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            onRemove(id);
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = () => {
        if(window.confirm("정말 수정하시겠습니까?")){
            onEdit(id, localContent);
            toggleIsEdit()
        }
    }


    return (
        <div className="post_box">
            <div className="item_header">
                <div className="item_title">제목 : {title}</div>
                <div className="item_writer">작성자 : {writer}</div>
            </div>
            <div className="post_date">작성일 : {new Date(create_date).toLocaleDateString()}</div>
            <p className="content_box">
                { isEdit ? (
                    <textarea
                        className="content_input"
                        ref={localContentInput}
                        value={localContent}
                        onChange={(e) => setLocalContent(e.target.value)} />
                ) : (
                    <>{content}</>
                )}
            </p>
            <div className="btn_group">

                {isEdit ? (
                    <>
                        <Button className="btn" size="sm" variant="outline-secondary" onClick={handleQuitEdit}>수정 취소</Button>
                        <Button className="btn" size="sm" variant="outline-primary" onClick={handleEdit}>수정 완료</Button>
                    </> ) : (
                    <>
                        <Button className="btn" size="sm" variant="outline-primary" onClick={toggleIsEdit}>수정</Button>
                        <Button className="btn" size="sm" variant="outline-danger" onClick={handleRemove}>삭제</Button>
                    </>
                )}


            </div>


        </div>
    );
};

export default PostItem;
