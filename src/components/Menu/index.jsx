import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

const routes = [
  {
    to: '/',
    text: 'Home',
    private: false,
    publicOnly: false
  },
  {
    to: '/blog',
    text: 'Blog',
    private: false,
    publicOnly: false
  },
  {
    to: '/profile',
    text: 'Profile',
    private: true,
    publicOnly: false
  },
  {
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true
  },
  {
    to: '/logout',
    text: 'Logout',
    private: true,
    publicOnly: false
  }
]
export default function Menu () {
  const { user } = useAuth()
  return (
    <nav>
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        listStyle: 'none',
      }}>
        {
          routes.map((route, index) => {
            if (!user && route.private) {
              return null
            }
            if (user && route.publicOnly) {
              return null
            }
            return (
              <li key={index}>
                <NavLink 
                  to={route.to}
                  style={({ isActive }) => ({
                    color: '#faccc2',
                    fontWeight: isActive ? 'bold' : 'normal',
                  })}
                >{route.text}</NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}