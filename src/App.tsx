import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"

export const App: FC = () => {
   return (
      <div className="h-full">
         <Routes>
            <Route path="" element={<HomePage />} />
         </Routes>
      </div>
   )
}
