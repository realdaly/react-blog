import BlogList from './BlogList'
import useFetch from './useFetch'


const Home = () => {
    const { data:blogs, message } = useFetch('http://localhost:8000/blogs')

    return(
        <div className="home">
            {message && <div>{message}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs:" />}
        </div>
    )
}

export default Home