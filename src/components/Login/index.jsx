import { useState } from 'react'
import { useAuth } from '../../context/auth';
import { Navigate } from 'react-router-dom';
export default function LogIn() {
  const { login, user } = useAuth()
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username});
  }

  if (user) {
    return <Navigate to="/profile"/>
  }
  return (
    <>
      <h1>Log in</h1>
      <p>Enter your username to LogIn</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onInput={(e) => setUsername(e.target.value)} 
        />
        <button>Log In</button>
      </form>
    </>
  )
}