import { useState, useContext } from 'react';
import PostsContext from '../context/posts';


function PostEdit({ post, onSubmit }) {
    const [title, setTitle] = useState(post.title);
    const { editPostById } = useContext(PostsContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editPostById(post.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary" >
                Save
            </button>
        </form>
    )
}

export default PostEdit;