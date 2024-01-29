import useSWR from "swr"
import { TUser } from "../../types/user"
import { httpClient } from "../client"

type ResponseType = Array<TUser>

type fetchUsersProps = {
   searchTerm: string | null
   by: string | null
}

export const fetchUsers = async ({ searchTerm, by }: fetchUsersProps) => {
   const search = `${by?.toLowerCase()}_like=${searchTerm}`
   const url = `/users?${searchTerm ? search : ""}`
   return (await httpClient.get<ResponseType>(url)).data
}

export const useUsersFetch = (props: fetchUsersProps) => {
   const { data, isLoading } = useSWR(props, fetchUsers)
   return { users: data, isLoading }
}
