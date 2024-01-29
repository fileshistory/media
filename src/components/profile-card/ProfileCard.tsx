import { FC } from "react"
import { Link } from "react-router-dom"

type ProfileCardProps = {
   id: number
   name: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ id, name }) => {
   return (
      <div className="pt-10">
         <div className="w-[400px] h-[200px] rounded-3xl shadow bg-white flex flex-col">
            <img
               className="w-20 h-20 rounded-full border-4 border-white mx-auto -mt-10"
               alt={name}
               src={`https://random.imagecdn.app/80/80?seed=${name}`}
            />
            <span className="text-lg font-medium mx-auto">
               {name}
            </span>
            <p className="text-gray-500 text-sm mx-auto mt-2">
               Lorem, ipsum dolor.
            </p>
            <div className="flex m-8 mt-auto space-x-4">
               <Link to={`/users/${id}/posts/1`} className="w-1/2 bg-[#046BA5] hover:bg-[#118FD6] transition rounded-full text-white font-bold h-14 text-center leading-[54px]">
                  Posts
               </Link>
               <Link to={`/users/${id}/albums/1`} className="w-1/2 text-[#046BA5] rounded-full underline font-bold h-14 leading-[54px] text-center">
                  Albums
               </Link>
            </div>
         </div>
      </div>
   )
}
