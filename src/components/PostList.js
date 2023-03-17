import { useContext } from 'react';
import PostsContext from '../context/posts';
import PostShow from './PostShow';

function PostList() {
    const { posts } = useContext(PostsContext);

    const renderedPosts = posts.map((post) => {
        return <PostShow post={post} key={post.id} />
    });

    return (
    <div className="book-list">
       {renderedPosts}
    </div>
    )
}

export default PostList;