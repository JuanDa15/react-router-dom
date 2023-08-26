import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider, ProtectedRoute } from './context/auth'
import Home from './components/Home'
import Blog from './components/Blog'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import BlogPost from './components/BlogPost'
import BlogLayout from './components/BlogLayout'
import LogIn from './components/Login'
import LogOut from './components/Logout'
import CreateBlog from './components/CreateBlog'

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<BlogLayout />} >
              <Route path='' element={<Blog />} />
              <Route path='create' element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              } />
              <Route path=':slug' element={<BlogPost />} />
            </Route>
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<LogIn />} />
            <Route path='/logout' element={
              <ProtectedRoute>
                <LogOut />
              </ProtectedRoute>
            } />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>

      </HashRouter>
    </>
  )
}

export default App
