// 


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { assests } from '../../assest/assest';
import { RxCrossCircled } from 'react-icons/rx';

interface Volunteer {
  name: string;
  description: string;
}

const initialVolunteers: Volunteer[] = [
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
  { name: 'Muhammad Ali', description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' },
];

const Notification: React.FC = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>(initialVolunteers);

  const handleDelete = (indexToDelete: number) => {
    const updatedList = volunteers.filter((_, index) => index !== indexToDelete);
    setVolunteers(updatedList);
  };

  return (
    <div className="flex flex-col gap-4 p-5 items-center bg-[#f5f7f7]">
      {volunteers.map((volunteer, index) => (
        <div
          key={index}
          className="bg-white w-full max-w-[700px] rounded-md p-4 shadow-sm flex justify-between items-center flex-wrap sm:flex-nowrap"
        >
          <div className="flex items-center gap-4 flex-1 flex-wrap sm:flex-nowrap min-w-0">
            <Image
              src={assests.profile_img}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full shrink-0"
            />
            <div className="min-w-0">
              <h3 className="m-0 font-bold text-gray-800">{volunteer.name}</h3>
              <p className="text-sm text-gray-600 break-words">{volunteer.description}</p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(index)}
            className="bg-transparent border-none p-1 hover:text-red-500 transition-colors"
            aria-label="Delete notification"
          >
            <RxCrossCircled className="text-2xl text-gray-500 hover:text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
