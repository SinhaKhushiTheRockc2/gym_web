import React from 'react'

const Button = ({content}) => {
  return (
    <button className="px-4 py-4 font-montserrat text-lg leading-none border rounded-full text-slate-400 transition-all ease-in-out duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 hover:scale-95">{content}</button>
  )
}

export default Button
