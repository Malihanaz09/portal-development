'use client';

import React from 'react';
import Image from 'next/image';
import styles from './volunteer.module.css';
import { assests } from '../../assest/assest';
// import IdCardFrontImg from '../../ui/dashboard-component/idcardfrontimg';
// import IdCardBackImg from '../../ui/dashboard-component/idcardbackimg';

const VolunteerCardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Volunteer ID Card</h2>
      <div className={styles.cardWrapper}>
        {/* Front of the Card */}
        <div className={styles.card}>
          <Image
            src={assests.cardfront_img} // make sure the file is in the public folder
            alt="Front of ID Card"
            width={300}
            height={450}
            className={styles.image}
          />
          <div className={styles.profilewrap}>
              <Image
            src={assests.profile_img} // make sure the file is in the public folder
            alt="Front of ID Card"
            width={100}
            height={50}
            className={styles.profile}
          />

          </div>
        
      <div className={styles.details}>
        <h2 className={styles.name}>M. Umar</h2>
        <p className={styles.position}>Co-ordinator and Innovation Lead</p>
        <p><strong>ID:</strong> 657654</p>
        <p><strong>Join Date:</strong> May 01, 2025</p>
        <p><strong>Phone:</strong> +92 316 3765483</p>
      </div>
        </div>
        {/* Back of the Card */}
        <div className={styles.card}>
          <Image
            src={assests.cardback_img} // make sure the file is in the public folder
            alt="Back of ID Card"
            width={300}
            height={450}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardPage;     





