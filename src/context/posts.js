import { createContext, useState } from 'react';

const PostsContext = createContext();

function Provider({ children }) {
    const [posts, setPosts] = useState([]);

    const handleCreatePost = async (title) => {
        const updatedPosts = [
            ...posts,
            { id: Math.round(Math.random() * 999), title }
        ]
        setPosts(updatedPosts);
    };

    const deletePostById = (id) => {
        const updatedPosts = posts.filter((post) => {
            return post.id !== id;
        });
        setPosts(updatedPosts);
    }

    const editPostById = (id, newTitle) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === id) {
                return { ...post, title: newTitle };
            }
            return post;
        });
        setPosts(updatedPosts);
    }

    const valueToShare = {
        posts,
        deletePostById,
        editPostById,
        handleCreatePost
    }

    return (
    <PostsContext.Provider value={valueToShare}>
        {children}
    </PostsContext.Provider>
    );
}

export { Provider };
export default PostsContext;