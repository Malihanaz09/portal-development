// import React, { ReactNode } from 'react';
// import Navbar from '../ui/navbar/navbar';
// import Sidebar from '../ui/sidebar/sidebar';
// import styles from '../ui/dashboard-component/dashboard.module.css';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.menu}>
//         <Sidebar />
//       </div>
//       <div className={styles.content}>
//         <Navbar />
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React, { ReactNode } from 'react';
import Navbar from '../ui/navbar/navbar';
import Sidebar from '../ui/sidebar/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex bg-[var(--bg)]">
      {/* Sidebar */}
      <div className="flex-1 w-[240px] max-md:w-[40px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-[calc(100%-240px)] max-md:flex-[4] max-md:w-full p-0">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
