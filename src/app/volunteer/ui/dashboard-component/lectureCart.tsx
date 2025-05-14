// 'use client';

// import React, { useState } from 'react';
// import styles from './dashboard.module.css';

// interface LectureCartProps {
//   title: string;
//   description: string;
//   videoSrc: string;
// }

// const LectureCart: React.FC<LectureCartProps> = ({ title, description, videoSrc }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openVideo = () => setIsOpen(true);
//   const closeVideo = () => setIsOpen(false);

//   return (
//     <>
//       <div className={styles.cart}>
//         <div className={styles.videoWrapper} onClick={openVideo}>
//           <video width="100%" height="180" muted>
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <h3 className={styles.secheading}>{title}</h3>
//         <p className={styles.text}>{description}</p>
//       </div>

//       {isOpen && (
//         <div className={styles.modalOverlay} onClick={closeVideo}>
//           <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//             <video controls autoPlay className={styles.fullVideo}>
//               <source src={videoSrc} type="video/mp4" />
//             </video>
//             <button className={styles.closeButton} onClick={closeVideo}>X</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LectureCart;



'use client';

import React, { useState } from 'react';

interface LectureCartProps {
  title: string;
  description: string;
  videoSrc: string;
}

const LectureCart: React.FC<LectureCartProps> = ({ title, description, videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <>
      <div className="w-[520px] bg-[#f9f9f9] rounded-xl shadow-md transition hover:shadow-lg">
        <div
          className="cursor-pointer overflow-hidden rounded-t-xl"
          onClick={openVideo}
        >
          <video width="100%" height="180" muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3 className="px-5 pt-4 font-bold text-gray-800">{title}</h3>
        <p className="px-5 pb-5 text-black">{description}</p>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeVideo}
        >
          <div
            className="relative max-w-[90%] max-h-[90%] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video controls autoPlay className="w-full h-auto block">
              <source src={videoSrc} type="video/mp4" />
            </video>
            <button
              onClick={closeVideo}
              className="absolute top-2 right-3 bg-red-600 text-white px-3 py-1 text-lg rounded hover:bg-red-700"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LectureCart;

