import { FC } from "react"

type AlbumCardProps = {
   title: string
}

export const AlbumCard: FC<AlbumCardProps> = ({ title }) => {
   return (
      <div className="w-full rounded-3xl shadow bg-white flex flex-col overflow-hidden p-1 pb-5">
         <img
            className="w-full h-40 rounded-[20px] mx-auto text-transparent"
            alt={title}
            src={`https://random.imagecdn.app/400/160?seed=${title}`}
         />
         <span className="text-lg font-medium mx-auto px-4">
            {title}
         </span>
         <p className="text-gray-500 text-sm px-2 mt-2">
            Necessitatibus voluptas quibusdam reiciendis recusandae.
         </p>
      </div>
   )
}
