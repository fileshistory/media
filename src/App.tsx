import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import { AlbumsPage } from "./pages/albums/AlbumsPage"

export const App: FC = () => {
   return (
      <div className="h-full flex flex-col">
         <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/users/:userId/albums/:page" element={<AlbumsPage />} />
         </Routes>
      </div>
   )
}
