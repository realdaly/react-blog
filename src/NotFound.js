import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <p>That page cannot be found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     )
}
 
export default NotFound;