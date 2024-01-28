import { FC, useEffect, useState } from "react"
import { ProfileCard } from "../../components/profile-card/ProfileCard"
import { TUser } from "../../types/user"
import { getUsers } from "../../api/services/users"

export const HomePage: FC = () => {

   const [users, setUsers] = useState<TUser[]>([])

   useEffect(() => {
      getUsers().then(setUsers)
   }, [])

   return (
      <div className="grid grid-cols-2 place-items-center w-fit mx-auto gap-4 mt-4">
         {users.map((user, index) => (
            <ProfileCard key={index} name={user.name} />
         ))}
      </div>
   )
} 
