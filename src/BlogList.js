import { Link } from "react-router-dom"

const BlogList = (props) => {
    const title = props.title
    const blogs = props.blogs

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.slice(0).reverse().map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList