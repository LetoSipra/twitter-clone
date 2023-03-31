import { FaTwitter } from "react-icons/fa";
import SideBarLinks from "./SideBarLinks";
import { RiHome7Fill } from "react-icons/ri";
import {
  HiSearch,
  HiOutlineBell,
  HiOutlineBookmark,
  HiOutlineUser,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDotsHorizontal,
} from "react-icons/hi";
import { TbHexagonLetterB } from "react-icons/tb";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { signOut, useSession } from "next-auth/react";

function SideBar() {
  const { data: session }: any = useSession();

  const SideBarLink = [
    { Icon: RiHome7Fill, text: "Home", active: true, href: "/" },
    { Icon: HiSearch, text: "Explore", active: false, href: "/" },
    { Icon: HiOutlineBell, text: "Notifications", active: false, href: "/" },
    { Icon: HiOutlineEnvelope, text: "Messages", active: false, href: "/" },
    { Icon: HiOutlineBookmark, text: "Bookmarks", active: false, href: "/" },
    { Icon: TbHexagonLetterB, text: "Twitter Blue", active: false, href: "/" },
    { Icon: HiOutlineUser, text: "Profile", active: false, href: "/" },
    { Icon: HiOutlineDotsCircleHorizontal, text: "More", active: false, href: "/" },
  ];

  return (
    <>
      <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
        <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24 ">
          <FaTwitter className="h-[30px] w-[30px] text-white" />
        </div>
        <div className="mb-2.5 mt-4 space-y-3 xl:ml-24">
          {SideBarLink.map((link, index) => (
            <SideBarLinks
              Icon={link.Icon}
              text={link.text}
              active={link.active}
              key={index}
              href={link.href}
            />
          ))}
        </div>
        <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-xl transition duration-300 hover:opacity-90 xl:inline ">
          Tweet
        </button>
        <div
          className="hoverAnimation mt-auto flex items-center justify-center text-[#d9d9d9] xl:ml-auto"
          onClick={() => signOut()}>
          <img
            src={session?.user?.image || ""}
            className="h-10 w-10 rounded-full xl:mr-2.5 "
            alt=""
          />
          <div className="hidden leading-5 xl:inline ">
            <h4 className="font-bold">{session?.user?.name}</h4>
            <p className="text-[#65767d]">@{session?.user?.tag}</p>
          </div>
          <HiOutlineDotsHorizontal className="ml-10 hidden h-5 xl:inline" />
        </div>
      </div>
    </>
  );
}

export default SideBar;
