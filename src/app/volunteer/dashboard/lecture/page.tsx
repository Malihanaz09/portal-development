// import React from 'react';
// import styles from '../../ui/dashboard-component/dashboard.module.css';
// import LectureCart from '../../ui/dashboard-component/lectureCart';

// const CartItems = [
//   {
//     title: 'React Basics',
//     videoSrc: 'https://youtu.be/pyP_XpLeXBQ',
//     description: 'Learn the fundamentals of React.',
//   },
//   {
//     title: 'JavaScript Essentials',
//     videoSrc: '/videos/js.mp4',
//     description: 'Core JavaScript concepts explained.',
//   },
// ];

// const Lecture = () => {
//   return (
//     <>
//       <div className={styles.head}>
//         <h2>Volunteer Dashboard</h2>
//       </div>
//       <div className={styles.box}>
//         {CartItems.map((item) => (
//           <LectureCart
//             key={item.title}
//             title={item.title}
//             description={item.description}
//             videoSrc={item.videoSrc}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Lecture;


import React from 'react';
import LectureCart from '../../ui/dashboard-component/lectureCart';

const CartItems = [
  {
    title: 'React Basics',
    videoSrc: 'https://youtu.be/pyP_XpLeXBQ',
    description: 'Learn the fundamentals of React.',
  },
  {
    title: 'JavaScript Essentials',
    videoSrc: '/videos/js.mp4',
    description: 'Core JavaScript concepts explained.',
  },
];

const Lecture = () => {
  return (
    <>
      <div className="bg-white px-8 py-4 font-bold text-lg border-b">
        <h2>Volunteer Dashboard</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-6 p-6">
        {CartItems.map((item) => (
          <LectureCart
            key={item.title}
            title={item.title}
            description={item.description}
            videoSrc={item.videoSrc}
          />
        ))}
      </div>
    </>
  );
};

export default Lecture;

