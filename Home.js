import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Hey, this is great...', author: 'Daniel', id:1},
        {title: 'My newly created website', body: 'Hey, this is great...', author: 'David', id:2},
        {title: 'My latest website', body: 'Hey, this is great...', author: 'Chibuenyim', id:3}
    ]);
       
        

    return (
        <div className="home">
            
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;