import React from "react";
import Image from "next/image";
import { FaRegBell, FaRegEnvelope, FaRegUser, FaTwitter } from "react-icons/fa";
import { title } from "process";
import { FaHashtag } from "react-icons/fa6";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { FeedCard } from "@/components/FeedCard";
import { CiMoneyBill } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleBold />,
  },
  {
    title: "Twitter Blue",
    icon: <CiMoneyBill />
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className=" col-span-3  pt-1  ml-29  ">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-1 text-xl  pr-4 ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full py-4 px-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span> 
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3" >
              <button className="bg-[#1d9bf0]  font-semibold text-lg py-2 px-4 rounded-full w-full mt-4 mx-4">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll  border-gray-400">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
