import React from "react"
import { useAuth } from "../Context/AuthContext"
import useReset from "../Hooks/useReset"

export default function Settings() {
  const {
    hydratePosts,
    hydrateUsers,
    deleteAllPosts,
    deleteAllUsers,
  } = useReset()

  const { logout } = useAuth()

  return (
    <div>
      <button onClick={hydratePosts}>Hydrate Posts</button>
      <button onClick={hydrateUsers}>Hydrate Users</button>

      <button onClick={deleteAllPosts}>Delete All Posts</button>
      <button onClick={deleteAllUsers}>Delete All Users</button>
      <button onClick={logout}>logout</button>
    </div>
  )
}
