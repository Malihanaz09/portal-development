// 'use client';

// import './profile.css';
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaUser,
//   FaCalendarAlt,
//   FaIdCard,
//   FaGraduationCap,
// } from 'react-icons/fa';

// export default function Profile() {
//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         {/* Sidebar */}
//         <div className="profile-box">
//           <div className="profile-content">
//             <div className="avatar" />
//             <h2>Muhammad Ali</h2>
//             <p className="email">muhammadali221@gmail.com</p>

//             <div className="info">
//               <div className="info-item">
//                 <FaEnvelope />
//                 <span>muhammadali221@gmail.com</span>
//               </div>
//               <div className="info-item">
//                 <FaPhoneAlt />
//                 <span>03127473404</span>
//               </div>
//               <div className="info-item">
//                 <FaMapMarkerAlt />
//                 <span>Lorem Ipsum Is Simply Dummy</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           <div className="info-boxes">
//             <div className="info-box">
//               <div className="label">
//                 <FaUser />
//                 <span>Full Name</span>
//               </div>
//               <p className="value">Muhammad Ali</p>

//               <div className="label">
//                 <FaCalendarAlt />
//                 <span>Date Of Birth</span>
//               </div>
//               <p className="value">July 28, 2010</p>
//             </div>

//             <div className="info-box">
//               <div className="label">
//                 <FaUser />
//                 <span>Gender</span>
//               </div>
//               <p className="value">Male</p>

//               <div className="label">
//                 <FaIdCard />
//                 <span>CNIC</span>
//               </div>
//               <p className="value">42206856687</p>
//             </div>
//           </div>

//           <div className="info-box">
//             <div className="label">
//               <FaGraduationCap />
//               <span>Qualification</span>
//             </div>
//             <p className="value">Intermediate</p>
//           </div>

//           <div className="info-box active-course">
//             <div>
//               <p className="text-muted">Active Course</p>
//               <p>
//                 Course Name: <strong>Lorem</strong> | Roll Number: <strong>99088</strong>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaIdCard,
  FaGraduationCap,
} from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-8 mx-5">
      <div className="flex flex-col lg:flex-row gap-4 bg-[var(--bg)] p-2">
        {/* Sidebar */}
        <div className="bg-white p-6 rounded-lg w-full lg:w-1/4 shadow-md">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Muhammad Ali</h2>
            <p className="text-gray-500 my-2">muhammadali221@gmail.com</p>

            <div className="text-left text-sm">
              <div className="flex items-center gap-2 my-3 text-gray-700">
                <FaEnvelope />
                <span>muhammadali221@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 my-3 text-gray-700">
                <FaPhoneAlt />
                <span>03127473404</span>
              </div>
              <div className="flex items-center gap-2 my-3 text-gray-700">
                <FaMapMarkerAlt />
                <span>Lorem Ipsum Is Simply Dummy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaUser />
                <span>Full Name</span>
              </div>
              <p className="font-semibold text-sm mb-4">Muhammad Ali</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaCalendarAlt />
                <span>Date Of Birth</span>
              </div>
              <p className="font-semibold text-sm">July 28, 2010</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaUser />
                <span>Gender</span>
              </div>
              <p className="font-semibold text-sm mb-4">Male</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <FaIdCard />
                <span>CNIC</span>
              </div>
              <p className="font-semibold text-sm">42206856687</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <FaGraduationCap />
              <span>Qualification</span>
            </div>
            <p className="font-semibold text-sm">Intermediate</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
          </div>
        </div>
      </div>
    </div>
  );
}
