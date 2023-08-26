import { useAuth } from "../../context/auth"

export default function LogOut() {
  const {logout, user} = useAuth()
  return (
    <>
      <h1>Log Out</h1>
      <p>Are you sure you want to log out {user?.username}?</p>
      <button onClick={logout}>Log Out</button>
    </>
  )
}