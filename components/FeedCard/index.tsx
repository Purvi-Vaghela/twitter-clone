import React from "react";
import Image from "next/image";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegHeart, FaRetweet } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";


export const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all  cursor-pointer" >
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1 ">
          <Image
          src= "data:image/jpeg;base64,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"
          alt="user-image"
            height={50}
            width={50} 
          />
        </div>
        <div className="col-span-11">
            <h5>Purvi Vaghela </h5>
           
            <p>We just officially announced that SpaceX will rescue the stranded Boeing astronauts from the international space station. 
Should I send Boeing the bill?</p> 
      <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%] ">
        <div>
          <LuMessageCircle />
        </div>
        <div>
        <FaRetweet />
        </div>
        <div><FaRegHeart /></div>
        <div><MdOutlineFileUpload /></div>
      </div>
        </div>
      </div>
    </div>  
  );
};
