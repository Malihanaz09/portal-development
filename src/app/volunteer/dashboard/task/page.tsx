// 'use client';

// import React from 'react';
// import styles from '../../ui/dashboard-component/dashboard.module.css';
// import Cart from '../../ui/dashboard-component/cart';

// interface DashboardItem {
//   title: string;
//   name: string;
//   description: string;
// }

// const dashboardItems: DashboardItem[] = [
//   {
//     title: 'First Task',
//     name: 'Lorem',
//     description:
//       'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
//   },
//   {
//     title: 'Second Task',
//     name: 'Lorem',
//     description:
//       'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
//   },
//   {
//     title: 'Thirth Task',
//     name: 'Lorem',
//     description:
//       'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
//   },
//   {
//     title: 'Forth Task',
//     name: 'Lorem',
//     description:
//       'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
//   },
// ];

// const Task: React.FC = () => {
// const handleFileUpload = (
//   e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>
// ) => {
//   // Handle file input
//   if ('target' in e && e.target instanceof HTMLInputElement) {
//     const file = e.target.files?.[0];
//     if (file) {
//       console.log('Uploaded file:', file);
//       alert(`Uploaded: ${file.name}`);
//     }
//   }

//   // Optional: Handle button click
//   if ('currentTarget' in e && e.currentTarget instanceof HTMLButtonElement) {
//     console.log('Button clicked');
//   }
// };

//   return (
//     <>
//       <div className={styles.head}>
//         <h2>Volunteer Dashboard</h2>
//       </div>
//       <div className={styles.box}>
//         {dashboardItems.map((item) => (
//           <Cart
//             key={item.title}
//             title={item.title}
//             name={item.name}
//             description={item.description}
//             buttonLabel="Upload File"
//             onButtonClick={handleFileUpload}
//             isFileUpload={true}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Task;





'use client';

import React from 'react';
import Cart from '../../ui/dashboard-component/cart';

interface DashboardItem {
  title: string;
  name: string;
  description: string;
}

const dashboardItems: DashboardItem[] = [
  {
    title: 'First Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Second Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Thirth Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
  {
    title: 'Forth Task',
    name: 'Lorem',
    description:
      'Lorem est dolor quam, aliquid, inventore libero, asperiores dolorum! Consequatur expedita ea assumenda!',
  },
];

const Task: React.FC = () => {
  const handleFileUpload = (
    e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    if ('target' in e && e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0];
      if (file) {
        console.log('Uploaded file:', file);
        alert(`Uploaded: ${file.name}`);
      }
    }

    if ('currentTarget' in e && e.currentTarget instanceof HTMLButtonElement) {
      console.log('Button clicked');
    }
  };

  return (
    <>
      <div className="bg-white px-8 py-4 font-bold">
        <h2>Volunteer Dashboard</h2>
      </div>

      <div className="w-full flex flex-wrap justify-between gap-5 px-10 py-10">
        {dashboardItems.map((item) => (
          <Cart
            key={item.title}
            title={item.title}
            name={item.name}
            description={item.description}
            buttonLabel="Upload File"
            onButtonClick={handleFileUpload}
            isFileUpload={true}
          />
        ))}
      </div>
    </>
  );
};

export default Task;
