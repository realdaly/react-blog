import { useState, useEffect} from 'react'
import BlogList from './BlogList'


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My first blog", body: "This is the first blog in my website...", author: "Mohamed", id: 1},
        {title: "Welcome to the blog", body: "I welcome to my blog...", author: "Mohamed", id: 2},
        {title: "Co-Worked here!", body: "I'm the co-worker in this blog...", author: "Mario", id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("using the effect hook")
    })

    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    )
}

export default Home