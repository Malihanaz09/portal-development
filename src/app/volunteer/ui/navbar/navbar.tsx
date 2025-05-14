// import React from 'react'
// import Link from 'next/link'
// import styles from '../navbar/navbar.module.css'
// import { CgProfile } from "react-icons/cg";
// import { MdNotificationsActive } from "react-icons/md";

// const Navbar = () => {

//   const menuItems = [
//     {
//       title: "Notification",
//       path: "/volunteer/dashboard/notification",
//       icon: <MdNotificationsActive />
//     },
//     {
//       title: "Profile",
//       path: "/volunteer/dashboard/profile",
//       icon: <CgProfile />
//     },
//   ];

//   return (
//     <>
// <nav className={styles.navbar}>
//       <h1 className={styles.mainheading}>Combine Foundation</h1>
//       <ul className={styles.navlinks}>
//         {menuItems.map((item) => (
//           <li key={item.title} className={styles.menuItem}>
//             <Link href={item.path} className={styles.link}>
//               <span className={styles.icon}>{item.icon}</span>
//               <span className={styles.title}>{item.title}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>



//     </>
   
//   )
// }

// export default Navbar

'use client';

import React from 'react';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsActive } from 'react-icons/md';

const Navbar = () => {
  const menuItems = [
    {
      title: 'Notification',
      path: '/volunteer/dashboard/notification',
      icon: <MdNotificationsActive />,
    },
    {
      title: 'Profile',
      path: '/volunteer/dashboard/profile',
      icon: <CgProfile />,
    },
  ];

  return (
    <nav className="w-full h-16 bg-white shadow flex items-center px-6 relative">
      {/* Centered Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-lg font-bold whitespace-nowrap">Combine Foundation</h1>
      </div>

      {/* Right-aligned Links */}
      <ul className="flex items-center gap-4 ml-auto">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.path}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden sm:inline text-sm font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
