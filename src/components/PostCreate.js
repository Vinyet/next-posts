import { useState, useContext } from 'react';
import PostsContext from '../context/posts';

function PostCreate() {
    const [title, setTitle] = useState('');
    const { handleCreatePost } = useContext(PostsContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreatePost(title);
        setTitle('');
    }

    return (
        <div className="book-create">
        <h3>Add a topic</h3>
        <form onSubmit={handleSubmit}>
            <input className="input" value={title} onChange={handleChange} placeholder="Write your idea"/>
            <button className="button">Add</button>
        </form>
        </div>
    )
}

export default PostCreate;