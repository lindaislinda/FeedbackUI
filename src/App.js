function App() {
    //Dynamic Values
    const title = "Blog Post"
    const body = "This is my blog post"
    const comments = [
        {id: 1, text: "This is comment 1"},
        {id: 2, text: "This is comment 2"},
        {id: 3, text: "This is comment 3"},
    ]

    const loading = false
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    const commentsBlock = (
        <ul>
                    {/* index is 0, 1, 2,... */}
                    {comments.map((comment, index) => (
                        <li key = {index}>
                        {comment.text}
                        </li>
                    ))}
        </ul>

    )

    let showComments = true
    return (
        //You have to have one parent element
        //class --> className
        <div className="container"> 
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <p>{5+5}</p>
            <div className="commentsList">
                <h3>Comments ({comments.length})</h3>
                {showComments && commentsBlock}
                
            </div>
        </div>
    )
}
export default App