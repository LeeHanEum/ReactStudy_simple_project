import React from 'react';
import PostItem from "./PostItem";

const PostList = ({postList, onRemove, onEdit}) => {
    return (
        <div className="postList_box">
            <h4>게시글 리스트</h4>
            <h6>{postList.length}개의 게시글이 있습니다.</h6>
            {postList.map((post) => (
                <PostItem key={post.id} {...post} onRemove={onRemove} onEdit={onEdit}/>
            ))}
        </div>
    );
};

PostList.defaultProps = {
    postList : [],
}
export default PostList;
