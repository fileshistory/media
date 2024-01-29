import { FC } from "react"
import { Link, useParams } from "react-router-dom";
import { usePostsFetch } from "../../api/services/posts"
import { Spinner } from "../../components/spinner/Spinner"
import { PostCard } from "../../components/post-card/PostCard"
import { preventDefaultWhile } from "../../helpers/prevent-default-while"

export const PostsPage: FC = () => {
   const { userId, page } = useParams()
   const { posts, isLoading } = usePostsFetch(Number(userId), Number(page))

   if (isLoading) return <Spinner />

   return (
      <div>
         <div className="grid grid-cols-3 place-items-center w-fit mx-auto gap-4 mt-4">
            {posts?.map((post, index) => (
               <PostCard key={index} title={post.title} body={post.body} />
            ))}
         </div>
         <div className="mx-auto mt-10 flex justify-center">
            <Link
               to={`/users/${userId}/posts/${Number(page) - 1}`}
               onClick={preventDefaultWhile(Number(page) <= 1)}
               className="block text-center leading-[80px] w-20 h-20 bg-gray-100 border-gray-700 border-b-4 rounded"
            >
               Prev
            </Link>
            <Link
               to={`/users/${userId}/posts/${Number(page) + 1}`}
               onClick={preventDefaultWhile(Number(page) >= 10)}
               className="block text-center leading-[80px] w-20 h-20 ml-10 bg-gray-100 border-gray-700 border-b-4 rounded"
            >
               Next
            </Link>
         </div>
      </div>
   )
};
