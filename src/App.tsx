import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import { AlbumsPage } from "./pages/albums/AlbumsPage"
import { PostsPage } from "./pages/posts/PostsPage"

export const App: FC = () => {
   return (
      <div className="h-full flex flex-col py-10 px-4">
         <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/users/:userId/albums/:page" element={<AlbumsPage />} />
            <Route path="/users/:userId/posts/:page" element={<PostsPage />} />
         </Routes>
      </div>
   )
}
