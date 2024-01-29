import { FC } from "react"
import { useAlbumsFetch } from "../../api/services/albums"
import { AlbumCard } from "../../components/album-card/AlbumCard"
import { Link, useParams } from "react-router-dom"
import { Spinner } from "../../components/spinner/Spinner"
import { preventDefaultWhile } from "../../helpers/prevent-default-while"

export const AlbumsPage: FC = () => {

   const { userId, page } = useParams()
   const { albums, isLoading } = useAlbumsFetch(Number(userId), Number(page))

   if (isLoading) return <Spinner />

   return (
      <div>
         <div className="grid grid-cols-3 place-items-center w-fit mx-auto gap-4 mt-4">
            {albums?.map((album, index) => (
               <AlbumCard key={index} title={album.title} />
            ))}
         </div>
         <div className="mx-auto mt-10 flex justify-center">
            <Link
               to={`/users/${userId}/albums/${Number(page) - 1}`}
               onClick={preventDefaultWhile(Number(page) <= 1)}
               className="block text-center leading-[80px] w-20 h-20 bg-gray-100 border-gray-700 border-b-4 rounded"
            >
               Prev
            </Link>
            <Link
               to={`/users/${userId}/albums/${Number(page) + 1}`}
               onClick={preventDefaultWhile(Number(page) >= 10)}
               className="block text-center leading-[80px] w-20 h-20 ml-10 bg-gray-100 border-gray-700 border-b-4 rounded"
            >
               Next
            </Link>
         </div>
      </div>
   )
}
