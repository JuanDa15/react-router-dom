import { useBlogs } from "../../Hooks/useBlogs";
import { useAuth } from "../../context/auth"

export default function CreateBlog() {
  const { user } = useAuth()
  const { addBlog } = useBlogs()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target)
    const data = Object.fromEntries(form)

    const body = {
      ...data,
      id: crypto.randomUUID()
    }

    addBlog(body)
  }
  return (
    <>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        <input type="text" placeholder="Title" id="title" name="title" required/>
        <input type="text" placeholder="Author" id="author" name="author" defaultValue={user?.username} required readOnly/>
        <input type="text" placeholder="Slug" id="slug" name="slug" required/>
        <textarea placeholder="Content" id="content" name="content" required/>
        <button type="submit">
          Create Blog
        </button>
      </form>
    </>
  )
}