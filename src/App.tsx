import { Route, Routes } from "react-router-dom"
import { Home, PostDetails, Posts, UserDetails, Users } from "./pages"
import { Navigation } from "./components"

function App() {

  return (
    <>
      <Navigation />
      <main className="px-6">
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />

          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />

          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App