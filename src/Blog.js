import { Link } from "react-router-dom";
const Blog = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((Blog) => (
                <div className="blog-preview" key={Blog.id}>
                    <Link to={`/blogs/${Blog.id}`}>
                        <h2>{Blog.title}</h2>
                        <p>written by {Blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
export default Blog;