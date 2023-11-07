import React, {useRef, useState} from 'react';
import PostEditor from "./PostEditor";
import PostList from "./PostList";

const Post = () => {

    const [postList, setPostList] = useState([]);
    const postId = useRef(1)

    const onCreate = (title, writer, content) => {
        const create_date = new Date().getTime();
        const newPost = {
            title,
            writer,
            content,
            create_date,
            id : postId.current,
        }
        postId.current += 1;
        setPostList([newPost, ...postList]);
    }

    const onRemove = (targetId) =>{
        const newPostList = postList.filter((it) => it.id !== targetId);
        setPostList(newPostList);
    }

    const onEdit = (targetId, newContent) => {
        setPostList(
            postList.map((it) =>
                it.id === targetId ? {...it, content : newContent} : it)
        );
    }


    return (
        <div className="post_container">
            <PostEditor onCreate={onCreate}/>
            <PostList
                postList={postList}
                onRemove={onRemove}
                onEdit={onEdit}
            />

        </div>
    );
};

export default Post;
