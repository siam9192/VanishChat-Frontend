import React from 'react'

interface IProps {
  children:React.ReactNode,
  addedClass?:string
}
function Container({children,addedClass}:IProps) {
  return (
    <div className={`max-w-7xl mx-auto ${addedClass||''}`}>
      {
 children
      }
    </div>
  )
}

export default Container