import { FC } from "react"

type ProfileCardProps = {
   name: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ name }) => {
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
               <button className="w-1/2 bg-[#046BA5] hover:bg-[#118FD6] transition rounded-full text-white font-bold h-14">
                  Posts
               </button>
               <button className="w-1/2 text-[#046BA5] rounded-full underline font-bold h-14">
                  Albums
               </button>
            </div>
         </div>
      </div>
   )
}
