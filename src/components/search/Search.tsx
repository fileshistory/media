import clsx from "clsx"
import { FC, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { TSearchOrder } from "../../types/search-order"

type SearchProps = {
   options: { [key: string]: string }
}

export const Search: FC<SearchProps> = ({ options }) => {

   const [, setSearchParams] = useSearchParams();

   const [order, setOrder] = useState<TSearchOrder>("asc")

   const toggleOrder = () => {
      setOrder(order => order === "asc" ? "desc" : "asc")
   }

   const [searchBy, setSearchBy] = useState(Object.keys(options)[0])
   const [searchTerm, setSearchTerm] = useState("")

   const search = () => {
      if (searchTerm) {
         setSearchParams({
            search: searchTerm,
            by: searchBy.toLowerCase(),
            order,
         })
      } else {
         setSearchParams()
      }
   }

   return (
      <div className="h-20 rounded-full w-full bg-white max-w-4xl mx-auto mt-8 p-4 flex">
         <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            type="text"
            className="w-full h-full text-2xl rounded-full px-4 outline-none font-mono"
            placeholder="Search"
         />
         <div className="flex items-center">
            <select
               value={searchBy}
               onChange={e => setSearchBy(e.target.value)}
               className="w-40 px-4 rounded-full h-12 bg-zinc-300 ml-2"
            >
               {Object.keys(options).map((option, index) => (
                  <option key={index} value={option}>
                     by {options[option]}
                  </option>
               ))}
            </select>
            <div onClick={toggleOrder} className="h-12 w-12 bg-zinc-400 rounded-full ml-4 flex">
               <img
                  src={`/icons/search/asc.svg`}
                  className={clsx("w-5 h-5 m-auto transition", { "-scale-y-100": order === "desc" })}
                  alt="" />
            </div>
            <button onClick={search} className="h-12 w-32 bg-blue-400 rounded-full ml-4">
               Search
            </button>
         </div>

      </div>
   )
}
