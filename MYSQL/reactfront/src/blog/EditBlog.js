import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }
    return (

        <div className="flex items-center justify-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Edit Post</h2>
                    <form onSubmit={update}>
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
                            <button type='submit' className='btn btn-primary'>Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CompEditBlog;