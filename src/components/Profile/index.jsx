import { useAuth } from "../../context/auth";

export default function Profile() {
  const {user} = useAuth()
  return (
    <>
      <h2>Profile</h2>
      <p>Username: {user?.username}</p>
    </>
  )
}