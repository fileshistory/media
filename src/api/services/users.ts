import { TUser } from "../../types/user"
import { httpClient } from "../client"

type ResponseType = Array<TUser>

export const getUsers = async () => {
   const url = "/users"
   const response = await httpClient.get<ResponseType>(url)
   return response.data
}
