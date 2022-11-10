import { useNavigate, useParams } from "react-router-dom"
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, message } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }

    return(
        <div className="blog-details">
            {message && <div>{message}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
            )}
        </div>
    )
}

export default BlogDetails