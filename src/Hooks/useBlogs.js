import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export function useBlogs() {
  const [storageData, setStorageData, loading] = useLocalStorage('blogs', [])
  const navigate = useNavigate();


  const addBlog = (blog) => {
    const newBlogs = [...storageData, blog]
    setStorageData(newBlogs)
    navigate('/blog')
  }

  const deleteBlog = (id) => {
    const newBlogs = storageData.filter(blog => blog.id !== id)
    setStorageData(newBlogs)
    navigate('/blog')
  }

  return {
    blogs: storageData,
    loading,
    deleteBlog,
    addBlog
  }
}