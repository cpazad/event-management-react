import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data=>setBlogs(data))
  },[])
  
    return (
    <div className='grid grid-cols-3 gap-4 bg-slate-300 p-10'>
        {
            blogs.map((blog,id) =><div key={id} className='p-5 shadow-md text-left bg-slate-50 rounded'>
                <h3 className='text-2xl font-bold text-green-600 pb-3'>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>)
        }
    </div>
  )
}

export default Blog