import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return(
        <div className="post">
            <div className="post-content">
                <strong className="post-heading">
                    {props.index}. {props.post.title}
                </strong>
                <p className="post-text" style={{paddingTop: '10px'}} >
                    {props.post.body}
                </p>
            </div>
            <div>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default Post;