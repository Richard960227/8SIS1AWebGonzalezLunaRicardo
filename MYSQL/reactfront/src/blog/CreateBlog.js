import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (

        <div className="flex items-center justify-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Create Post</h2>
                    <form onSubmit={store}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type='text'
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div>
                            <label className="form-label">Content</label>
                            <input
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                type='text'
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button type='submit' className='btn btn-primary'>Store</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default CompCreateBlog;