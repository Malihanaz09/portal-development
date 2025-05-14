// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import styles from './volunteer.module.css';
// import { assests } from '../../assest/assest';

// interface VolunteerData {
//   name: string;
//   role: string;
//   id: string;
//   joinDate: string;
//   phone: string;
//   profile_img: string;
// }

// // Sample data
// const volunteer: VolunteerData = {
//   name: 'M. Ali',
//   role: 'Co-ordinator and Innovation Lead',
//   id: '678765',
//   joinDate: 'May 01, 2025',
//   phone: '+92 316 398783',
//   profile_img: '/volunteer/assest/profile.png'
// };

// const VolunteerCardPage: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Volunteer ID Card</h2>

//       <div className={styles.cardWrapper}>
//         {/* Front of the Card */}
//         <div className={styles.card}>
//           <Image
//             src={assests.cardfront_img}
//             alt="Front of ID Card"
//             width={300}
//             height={450}
//             className={styles.image}
//           />
//           <div className={styles.profilewrap}>
//             <Image
//               src={volunteer.profile_img}
//               alt={volunteer.name}
//               width={100}
//               height={100}
//               className={styles.profile}
//             />
//           </div>

//           <div className={styles.details}>
//             <h2 className={styles.name}>{volunteer.name}</h2>
//             <p className={styles.position}>{volunteer.role}</p>
//             <p>
//               <strong>ID:</strong> {volunteer.id}
//             </p>
//             <p>
//               <strong>Join Date:</strong> {volunteer.joinDate}
//             </p>
//             <p>
//               <strong>Phone:</strong> {volunteer.phone}
//             </p>
//           </div>
//         </div>

//         {/* Back of the Card */}
//         <div className={styles.card}>
//           <Image
//             src={assests.cardback_img}
//             alt="Back of ID Card"
//             width={300}
//             height={450}
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerCardPage;
  

'use client';

import React from 'react';
import Image from 'next/image';
import { assests } from '../../assest/assest';

interface VolunteerData {
  name: string;
  role: string;
  id: string;
  joinDate: string;
  phone: string;
  profile_img: string;
}

const volunteer: VolunteerData = {
  name: 'M. Ali',
  role: 'Co-ordinator and Innovation Lead',
  id: '678765',
  joinDate: 'May 01, 2025',
  phone: '+92 316 398783',
  profile_img: '/volunteer/assest/profile.png',
};

const VolunteerCardPage: React.FC = () => {
  return (
    <div className="text-center px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Volunteer ID Card</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* FRONT OF CARD */}
        <div className="relative w-[300px] shadow-lg rounded-xl overflow-hidden">
          <Image
            src={assests.cardfront_img}
            alt="Front of ID Card"
            width={300}
            height={450}
            className="w-full h-auto"
          />

          {/* Profile Image Positioned Absolutely */}
          <div className="absolute top-[90px] left-1/2 transform -translate-x-1/2">
            <Image
              src={volunteer.profile_img}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Text Details */}
          <div className="absolute bottom-10 w-full text-center px-4">
            <h2 className="text-xl font-semibold text-primary">{volunteer.name}</h2>
            <p className="text-gray-700 font-medium">{volunteer.role}</p>
            <p className="text-sm">
              <strong>ID:</strong> {volunteer.id}
            </p>
            <p className="text-sm">
              <strong>Join Date:</strong> {volunteer.joinDate}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {volunteer.phone}
            </p>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div className="w-[300px] shadow-lg rounded-xl overflow-hidden">
          <Image
            src={assests.cardback_img}
            alt="Back of ID Card"
            width={300}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardPage;


