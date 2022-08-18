import { ReactNode } from "react"

const ComponentDisplayer = ({children}:{children:ReactNode})=>{
    return (
        <div className="flex justify-center items-center h-40 w-full bg-gray-300 rounded-md">
            {children}
        </div>
    )
}
export default ComponentDisplayer