import * as starterPostsData from "../starterPostsData.json"
import * as starterUsersData from "../starterUsersData.json"
import useDatabase from "./useDatabase"

export default function useReset() {
  const { postsDB, usersDB } = useDatabase()

  function hydrate(initialData, database) {
    initialData.forEach((data) => database.add({ ...data }))
  }

  const hydratePosts = () => hydrate(starterPostsData.default, postsDB)
  const hydrateUsers = () => hydrate(starterUsersData.default, usersDB)

  function deleteAll(collection) {
    collection.get().then((res) => {
      res.forEach((element) => {
        element.ref.delete()
      })
    })
  }

  const deleteAllPosts = () => deleteAll(postsDB)
  const deleteAllUsers = () => deleteAll(usersDB)

  return {
    hydratePosts,
    hydrateUsers,
    deleteAllPosts,
    deleteAllUsers,
  }
}

// db.collection("posts").onSnapshot((snapshot) =>
//   snapshot.docs.map((doc) => console.log(doc.data()))
// )

// const testArray = ["user1", "user2"]

// db.collection("posts")
//   .where("user", "in", testArray)
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((post) => {
//       console.log(post.data())
//     })
//   })
