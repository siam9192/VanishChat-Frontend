import { BsEmojiSurprise } from 'react-icons/bs';
import { GoFileMedia } from 'react-icons/go';
import { LuSend } from 'react-icons/lu';

function MessageBox() {
  return (
    <div className=" p-2 md:p-5 flex  gap-2  ">
      <textarea className="w-full py-2 bg-gray-100 dark:bg-black outline-none border-none hide-scrollbar p-2 max-h-14 lg:max-h-20 rounded-md" />
      <div className="flex items-center gap-4">
        <button className="text-white text-xl">
          <LuSend />
        </button>
        <button className="text-white text-xl">
          <BsEmojiSurprise />
        </button>
        <button className="text-white text-xl">
          <GoFileMedia />
        </button>
      </div>
    </div>
  );
}

export default MessageBox;
