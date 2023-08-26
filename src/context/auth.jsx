import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext()
const adminList = ['usuario1', 'usuario2', 'usuario3']

export function AuthProvider({children}){
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState(null)
  const redirectPath = location?.state?.from || -1
  console.log(location)
  const login = ({username}) => {
    const isAdmin = adminList.includes(username)
    console.log(redirectPath)
    setUser({ username, isAdmin })
    navigate(redirectPath, {
      replace: true
    })
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const auth = {
    user,
    login,
    logout
  }
  

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{
      from: location.pathname
    }} replace />;
  }
  return children;
}
export function useAuth () {
  const auth = useContext(AuthContext)
  return auth
}

