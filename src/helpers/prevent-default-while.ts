import { MouseEvent } from "react"

export const preventDefaultWhile = (condition: boolean) => {
   return (event: MouseEvent) => {
      if (condition) {
         event.preventDefault()
      }
   }
}
