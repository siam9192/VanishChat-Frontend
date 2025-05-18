import { useState, type ReactNode } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineGroups2 } from "react-icons/md"

interface IProps {
    children:ReactNode,
    onSuccess?:()=>void
    onFail?:()=>void
    onCancel?:()=>void
}

function CreateChatModal(props:IProps) {
    const {children,onSuccess,onCancel,onFail} =  props
    
    const [isOpen,setIsOpen] = useState(true)
  return (
    <>
    {/* Open Button */}
    <div onClick={()=>setIsOpen(true)} className="w-fit hover:cursor-pointer" >
       {
        children
       }
    </div>

    <div className="w-full h-full fixed inset-0   bg-gray-900/70 flex justify-center items-center text-start">
       <div  className="w-1/2  min-h-60  bg-white dark:bg-black  p-5  rounded-md">
            <h1 className="text-2xl font-medium ">Create your chatroom</h1>
            <div className="mt-10 space-y-4">
              
                    <div className=" w-10/12 mx-auto flex items-center gap-2  border-b-2 px-2 border-gray-700/20 dark:border-gray-800  ">
                        <span className="text-2xl">
                            <AiOutlineUser />
                        </span>
                        <input type="text" placeholder="Your name here.." className="bg-transparent py-3 w-full outline-none border-none " />
                    </div>
                       
                    <div className=" w-10/12 mx-auto flex items-center gap-2  border-b-2 px-2  border-gray-700/20 dark:border-gray-800 ">
                        <span className="text-2xl">
                        <MdOutlineGroups2 />
                        </span>
                        <input type="text" placeholder="Your room name here.." className="bg-transparent py-3 w-full outline-none border-none " />
                    </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default CreateChatModal