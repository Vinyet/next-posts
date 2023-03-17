import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

function App() {
     return (
        <div className="app">
            <h1>What should I write next?</h1>
            <PostList />
            <PostCreate />
        </div>
    )
}

export default App;