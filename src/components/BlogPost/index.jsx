import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useBlogs } from "../../Hooks/useBlogs"
import { useAuth } from "../../context/auth";

export default function BlogPost () {
  const { slug } = useParams()
  const { blogs, loading, deleteBlog } = useBlogs(); 
  const { user } = useAuth()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [error, setError] = useState(false)

  
  
  useEffect(() => {
    const temp = blogs?.find(b => b.slug === slug)
    if (!loading && !temp) {
      setError(true)
      return;
    }
    setError(false)
    setBlog(temp)
    
  }, [blogs, slug])
  
  const handleBack = () => {
    navigate(-1, { replace: true })
  }
  
  const canDelete = user?.isAdmin || user?.username === blog?.author
  
  return (
    <>
      {
        (loading) && (
          <p>Loading post...</p>
        )
      }
      {
        (error && !loading) && (
          <p>Post not found...</p>
        )
      }
      {
        (blog && !loading) && (
          <div style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
          }}>
            <h1>{blog.title}</h1>
            <p><b>{blog.author}</b></p>
            <hr />

            <p>
              {blog.content}
            </p>
            <button type="button" onClick={handleBack}>
              Go back
            </button>
            {
              canDelete && (
                <button onClick={() => deleteBlog(blog?.id)}>
                  Delete post
                </button>
              )
            }
          </div>
        )
      }
    </>
  )
}