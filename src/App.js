import { useState } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'about the Java!'},
        {id: 2, title: 'Python', body: 'about the Python!'},
        {id: 3, title: 'C#', body: 'about the C#!'},
        {id: 4, title: 'JavaScript', body: 'JavaScript is the best prog language!'},
    ]);


    function createPost(newPost) {
        setPosts([...posts, newPost])
    }
    function removePost(post) {
        setPosts(posts.filter(e => e.id !== post.id))
    }


    return (
        <>
            <CreatePost create={createPost} posts={posts} />

            <hr style={{margin: '15px 0'}}></hr>

            {
                posts.length === 0
                ?  <h1 style={{textAlign: 'center', padding: '20px 0'}}>
                        no Posts yet
                    </h1>
                :   <PostList remove={removePost} posts={posts} title='Posts:'/>
            }
        </>
    );
}

export default App;