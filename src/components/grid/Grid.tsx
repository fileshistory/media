import clsx from "clsx"
import { FC, PropsWithChildren } from "react"

type GridProps = PropsWithChildren<{
   className?: string
}>

export const Grid: FC<GridProps> = ({ children, className }) => {
   return (
      <div className={
         clsx("grid grid-cols-1 lg:grid-cols-[400px_400px] xl:grid-cols-[400px_400px_400px] w-fit mx-auto gap-4", className)
      }>
         {children}
      </div>
   )
}
