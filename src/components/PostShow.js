import { useState, useContext } from 'react';
import PostsContext from '../context/posts';
import PostEdit from './PostEdit';

function PostShow({ post}) {
    const [ showEdit, setShowEdit ] = useState(false);
    const { deletePostById } = useContext(PostsContext);

    const handleDeleteClick = () => {
        deletePostById(post.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{post.title}</h3>
    if (showEdit) {
        content = <PostEdit onSubmit={handleSubmit} post={post} />
    }

    return (
        <div className="book-show">
            <img alt="post" src={`https://picsum.photos/seed/${post.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    ) 
}

export default PostShow;