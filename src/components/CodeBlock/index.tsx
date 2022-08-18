import { HTMLAttributes, ReactElement } from "react";

interface Props extends HTMLAttributes<HTMLPreElement> {
  
}
const CodeBlock = ({ children, className, ...rest }: Props) => {
  const { props } = children as ReactElement;
  const Icon = ()=>{
    switch (props.className.split(':')[0]) {
        case 'language-typescript':
            return 'devicon-typescript-plain colored'
        case 'language-html':
              return 'devicon-html5-plain colored'
        default:
        return ''
    }
  }
  return (
    <pre {...rest} className="bg-gray-300 text-black rounded-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
      {props.className.split(':')[1] && <span className="font-bold bg-white p-1 rounded-md">{props.className.split(':')[1]}</span>}
      <i className={`${Icon()} flex self-end text-3xl`}></i>
      </div>
      {children}
    </pre>
  );
};
export default CodeBlock;
