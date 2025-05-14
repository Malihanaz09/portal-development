import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { MdScreenSearchDesktop, MdTaskAlt } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { assests } from '../../assest/assest.js';
import { IoIosLogOut } from "react-icons/io";
import { FaIdCardClip } from "react-icons/fa6";
import Image from 'next/image';

const menuItems = [
  {
    title: "Profile",
    path: "/volunteer/dashboard/profile",
    icon: <CgProfile />,
  },
  {
    title: "Lecture",
    path: "/volunteer/dashboard/lecture",
    icon: <MdScreenSearchDesktop />,
  },
  {
    title: "Course",
    path: "/volunteer/dashboard/course",
    icon: <IoMdSchool />,
  },
  {
    title: "Task",
    path: "/volunteer/dashboard/task",
    icon: <MdTaskAlt />,
  },
  {
    title: "Get Card",
    path: "/volunteer/dashboard/getCard",
    icon: <FaIdCardClip />,
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIosLogOut />,
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen bg-white text-gray-800 p-5 shadow-lg fixed transition-all duration-300 ease-in-out">
      <div className="-mt-16">
        <Image
          src={assests.logo}
          alt="Logo"
          priority
          width={200}
          height={60}
          className="h-auto"
        />
      </div>
      <ul className="p-0 mt-8">
        {menuItems.map((item) => (
          <li key={item.title} className="mb-4">
            <Link href={item.path} className="flex items-center gap-4 text-black no-underline border-2 border-gray-300 px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-orange-600 hover:border-transparent hover:text-white">
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

