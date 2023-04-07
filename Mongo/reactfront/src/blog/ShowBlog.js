import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    //procedimiento para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        getBlogs();
    }

    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Link to="/create" className="btn btn-primary items-center float-right"><i className="fa-solid fa-plus"></i></Link>
                        <table className="table w-full border border-purple-800 ">
                            {/* head*/}
                            <thead>
                                <tr className="text-center">
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, index) => (
                                    <tr key={index}>
                                        <td> {blog.title}</td>
                                        <td> {blog.content}</td>
                                        <td>
                                            <Link to={`/edit/${blog._id}`} className="btn btn-warning"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => deleteBlog(blog._id)} className="btn btn-error ml-2"><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
};

export default CompShowBlogs;