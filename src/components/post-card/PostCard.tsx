import { FC } from "react"

type PostCardProps = {
   title: string
   body: string
}

export const PostCard: FC<PostCardProps> = ({ title, body }) => {
   return (
      <div className="w-[400px] rounded-3xl shadow bg-white flex flex-col overflow-hidden p-1 pb-5">
         <img
            className="w-full h-40 rounded-[20px] mx-auto text-transparent"
            alt={title}
            src={`https://random.imagecdn.app/400/160?seed=${title}`}
         />
         <span className="text-lg font-medium mx-auto px-4">
            {title}
         </span>
         <p className="text-gray-500 text-sm px-2 mt-2">
            {body}
         </p>
      </div>
   )
}
