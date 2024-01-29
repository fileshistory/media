import { httpClient } from "../client"
import { settings } from "../../settings"
import useSWR from "swr"
import { TPost } from "../../types/post"
import { calculateOffset } from "../utils"

type RequestType = {
   userId: number
   page: number
   perPage: number
}

type ResponseType = Array<TPost>

export const fetchPosts = async (request: RequestType) => {
   const offset = calculateOffset(request.page, request.perPage)
   const url = `/posts?_start=${offset}&_limit=${request.perPage}`

   const response = await httpClient.get<ResponseType>(url)
   return response.data
}

export const usePostsFetch = (userId: number, page: number) => {
   const perPage = settings.albums.perPage
   const { data, isLoading } = useSWR({ page, perPage, userId }, fetchPosts)
   return { posts: data, isLoading }
}
