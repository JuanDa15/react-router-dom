import BlogLink from '../BlogLink';
import { useBlogs } from '../../Hooks/useBlogs';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Blog() {
  const { user } = useAuth();
  const { blogs } = useBlogs() 
 
  return (
    <div>
      <h1>Blog</h1>
      {
        user?.username && (
          <a type='button'>
            <Link to='/blog/create'>
              Create blog
            </Link>
          </a>
        )
      }
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        listStyle: 'none',
      }}>
      {
        blogs?.map((blog) => (
          <BlogLink key={blog.id} blog={blog} />
          ))
        }
      </ul>
      <Outlet />
    </div>
  )

}