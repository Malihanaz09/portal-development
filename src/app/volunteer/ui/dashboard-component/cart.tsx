// 'use client';

// import React from 'react';
// import styles from './dashboard.module.css';

// interface CartProps {
//   title: string;
//   name: string;
//   description: string;
//   buttonLabel: string;
//   onButtonClick: (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>) => void;
//   isFileUpload: boolean;
// }

// const Cart: React.FC<CartProps> = ({
//   title,
//   name,
//   description,
//   buttonLabel,
//   onButtonClick,
//   isFileUpload,
// }) => {
//   return (
//     <div className={styles.cart}>
//       <div className={styles.mainheading}>
//         {/* <span className={styles.iconWrapper}>
//           <img src={icon.src} className={styles.iconWhite} alt={title} width="40" height="40" />
//         </span> */}
//         <span className={styles.title}>{title}</span>
//       </div>

//       <h3 className={styles.secheading}>{name}</h3>
//       <p className={styles.text}>{description}</p>

//       {isFileUpload ? (
//         <label className={styles.uploadButton}>
//           Upload File
//           <input
//             type="file"
//             onChange={onButtonClick}
//             style={{ display: 'none' }}
//           />
//         </label>
//       ) : (
//         <button className={styles.addButton} onClick={onButtonClick}>
//           {buttonLabel}
//         </button>
//       )}
//     </div>
//   );
// };

// export default Cart;


'use client';

import React from 'react';

interface CartProps {
  title: string;
  name: string;
  description: string;
  buttonLabel: string;
  onButtonClick: (
    e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>
  ) => void;
  isFileUpload: boolean;
}

const Cart: React.FC<CartProps> = ({
  title,
  name,
  description,
  buttonLabel,
  onButtonClick,
  isFileUpload,
}) => {
  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-md p-4 transition-transform hover:scale-[1.02]">
      <div className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white font-bold rounded-t-md">
        <span className="text-lg">{title}</span>
      </div>

      <h3 className="px-4 pt-3 font-bold text-gray-800">{name}</h3>
      <p className="px-4 pb-2 text-gray-900 text-sm">{description}</p>

      {isFileUpload ? (
        <label className="inline-block bg-orange-600 text-white m-4 px-4 py-2 rounded-md font-semibold text-center cursor-pointer hover:shadow-md">
          Upload File
          <input
            type="file"
            onChange={onButtonClick}
            className="hidden"
          />
        </label>
      ) : (
        <button
          className="bg-orange-600 text-white border-none px-4 py-2 m-4 rounded-md cursor-pointer hover:shadow-md"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Cart;