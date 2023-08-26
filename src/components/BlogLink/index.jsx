import { Link } from "react-router-dom";

export default function BlogLink({blog}) {
  return (
    <li>
      <h4>{blog.title} - <small>{blog.author}</small></h4>
      <Link to={`/blog/${blog.slug}`}>Read more</Link>
    </li>
  )
}