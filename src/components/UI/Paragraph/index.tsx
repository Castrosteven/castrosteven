import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLParagraphElement>{}
const Paragraph = ({...rest}:Props)=>{
    return (
        <p {...rest} className="font-bold"></p>
    )
}
export default Paragraph