import React from 'react'

interface props {
    text:string,
    style?:string,
    type:'submit'|'button',
    variant:'primary'| 'secondary',
    handleClick?:()=>void,
    icon?:React.ReactElement
}

const Button:React.FC<props>= ({text,style,type,variant,handleClick,icon}) => {
  return (
    <button onClick={handleClick} type={type}   className={`${
        variant == "primary"
          ? "bg-indigo-600  hover:bg-indigo-700 "
          : "border  text-white  hover:bg-secondary hover:border-secondary hover:text-white  border-gray-500"
      }  px-4 py-2.5 rounded-sm flex items-center justify-center gap-x-2 transition-colors duration-75 ${style}`}>
      {text}

      {icon &&  React.cloneElement(icon) }
    </button>
  )
}

export default Button