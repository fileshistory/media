import { FC } from "react"
import { ProfileCard } from "../../components/profile-card/ProfileCard"
import { useUsersFetch } from "../../api/services/users"
import { Search } from "../../components/search/Search"
import { useSearchParams } from "react-router-dom"
import _ from "lodash"
import { TSearchOrder } from "../../types/search-order"

const searchOptions = {
   name: "Name",
   username: "Username",
   email: "Email"
}

export const HomePage: FC = () => {

   const [searchParams] = useSearchParams()

   const searchTerm = searchParams.get("search")
   const by = searchParams.get("by") || searchOptions.name

   const { users } = useUsersFetch({ searchTerm, by })
   
   /* WARN:
    * 'jsonplaceholder.typicode.com' - does not provide the ability
    * to organize the results of responses,
    * your results may not meet expectations.
    */
   const order = searchParams.get("order") as TSearchOrder
   const orderedUsers = _.orderBy(users, [by], order)

   return (
      <div>
         <Search options={searchOptions} />
         <div className="grid grid-cols-2 place-items-center w-fit mx-auto gap-4 mt-8">
            {orderedUsers?.map((user, index) => (
               <ProfileCard key={index} id={user.id} name={user.name} />
            ))}
         </div>
      </div>
   )
} 
