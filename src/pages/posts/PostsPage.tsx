import { FC } from "react"
import { Link, useParams } from "react-router-dom"
import { usePostsFetch } from "../../api/services/posts"
import { Spinner } from "../../components/spinner/Spinner"
import { PostCard } from "../../components/post-card/PostCard"
import { preventDefaultWhile } from "../../helpers/prevent-default-while"
import { Grid } from "../../components/grid/Grid"

export const PostsPage: FC = () => {
   const { userId, page } = useParams()
   const { posts, isLoading } = usePostsFetch(Number(userId), Number(page))

   if (isLoading) return <Spinner />

   return (
      <div>
         <Grid>
            {posts?.map((post, index) => (
               <PostCard key={index} title={post.title} body={post.body} />
            ))}
         </Grid>
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
