import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () =>{
    const [title, setTile] =  useState('');
    const [body, setBody] =  useState('');
    const [author, setAuthor] =  useState('mario');
    const [isPending,setisPending]= useState(false);
    const history= useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const  blog={title, body,author};
        setisPending(true);
       fetch('http://localhost:8000/blogs',{
           method:'POST',
           headers : {"Content-Type": "application/json"},
           body:JSON.stringify(blog)
       }).then(() =>{
           console.log('new blog added');
           setisPending(false);
        //    history.go(-1);
        history.push('/');
       });
    }
    return (
        <div  className="create">
            <h2>Add a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input
                type="text" required
                value={title}
                onChange={(e) => setTile(e.target.value)}/>
                <label> Blog Body :</label>
                <textarea 
                type="text"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author :</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button> Add Blog</button>}
                { isPending && <button disabled> Adding blog....</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}
export default Create;