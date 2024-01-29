import { TAlbum } from "../../types/album"
import { httpClient } from "../client"
import { settings } from "../../settings"
import useSWR from "swr"

type RequestType = {
   userId: number
   page: number
   perPage: number
}

type ResponseType = Array<TAlbum>

export const fetchAlbums = async (request: RequestType) => {
   const offset = calculateOffset(request.page, request.perPage)
   const url = `/albums?_start=${offset}&_limit=${request.perPage}`

   const response = await httpClient.get<ResponseType>(url)
   return response.data
}

export const useAlbumsFetch = (userId: number, page: number) => {
   const perPage = settings.albums.perPage
   const { data, isLoading } = useSWR({ page, perPage, userId }, fetchAlbums)
   return { albums: data, isLoading }
}

const calculateOffset = (page: number, perPage: number) => {
   return page <= 1 ? 0 : page * perPage - perPage;
}
