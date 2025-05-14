// import React from 'react';
// import styles from '../ui/dashboard-component/dashboard.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import { assests } from '../assest/assest';

// const dashboardItems = [
//   {
//     title: 'Lecture',
//     icon: assests.lecturelogo,
//     path: '/volunteer/dashboard/lecture',
//     description: 'View all lectures uploaded for volunteers.',
//   },
//   {
//     title: 'Course',
//     icon: assests.courselogo,
//     path: '/volunteer/dashboard/course',
//     description: 'Browse and manage your course content.',
//   },
//   {
//     title: 'Task',
//     icon: assests.tasklogo,
//     path: '/volunteer/dashboard/task',
//     description: 'Track and complete your assigned tasks.',
//   },
// ];

// const VolunteerDashboard = () => {
//   return (
//     <>
//       <div className={styles.head}>
//         <h2>Volunteer Dashboard</h2>
//       </div>
//       <div className={styles.box}>
//         {dashboardItems.map((item) => (
//           <Link href={item.path} key={item.title}>
//             <div className={styles.cart}>
//               <div className={styles.mainheading}>
//                 <span className={styles.iconWrapper}>
//                   <Image
//                     src={item.icon}
//                     className={styles.iconWhite}
//                     alt={item.title}
//                     width={40}
//                     height={40}
//                   />
//                 </span>
//                 <span className={styles.title}>{item.title}</span>
//               </div>
//               <h3 className={styles.secheading}>{item.title}</h3>
//               <p className={styles.text}>{item.description}</p>
//             </div>
            
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default VolunteerDashboard;



'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assests } from '../assest/assest';

const dashboardItems = [
  {
    title: 'Lecture',
    icon: assests.lecturelogo,
    path: '/volunteer/dashboard/lecture',
    description: 'View all lectures uploaded for volunteers.',
  },
  {
    title: 'Course',
    icon: assests.courselogo,
    path: '/volunteer/dashboard/course',
    description: 'Browse and manage your course content.',
  },
  {
    title: 'Task',
    icon: assests.tasklogo,
    path: '/volunteer/dashboard/task',
    description: 'Track and complete your assigned tasks.',
  },
];

const VolunteerDashboard = () => {
  return (
    <>
      <div className="bg-white px-8 py-3 font-bold">
        <h2>Volunteer Dashboard</h2>
      </div>
      <div className="w-full flex flex-wrap justify-between gap-5 p-10">
        {dashboardItems.map((item) => (
          <Link href={item.path} key={item.title}>
            <div className="w-[320px] sm:w-[460px] lg:w-[520px] bg-[#f9f9f9] m-2 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 bg-orange-600 px-5 py-3 bg-primary text-white font-bold rounded-t-md">
                <span className="flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="invert"
                  />
                </span>
                <span className="text-lg">{item.title}</span>
              </div>
              <h3 className="px-5 pt-4 font-semibold text-[#333]">{item.title}</h3>
              <p className="px-5 pb-4 text-black">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default VolunteerDashboard;

