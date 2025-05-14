"use client";

import Link from "next/link";
import Image from "next/image";
import { assests } from "./volunteer/assest/assest";

const AccountTypeSelection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 m-5 p-4">
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg max-w-3xl w-full text-center">
        <div className="flex justify-center mb-5">
          <Image
            src={assests.account}
            alt="Account Illustration"
            className="w-32 h-auto"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Account Type
        </h1>
        <p className="text-gray-600 mt-1 mb-4 text-base sm:text-lg">
          Click your role to continue to your dashboard.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/volunteer/loginpage">
            <div className="w-36 sm:w-44 px-4 py-3 bg-orange-500 rounded-lg shadow-md hover:shadow-xl transition text-white text-center cursor-pointer">
              <h2 className="text-lg font-semibold text-white">Volunteer</h2>
            </div>
          </Link>
          <Link href="#">
            <div className="w-36 sm:w-44 px-4 py-3 bg-orange-500 rounded-lg shadow-md hover:shadow-xl transition text-white text-center cursor-pointer">
              <h2 className="text-lg font-semibold text-white">Admin</h2>
            </div>
          </Link>
          <Link href="#">
            <div className="w-36 sm:w-44 p-4 bg-orange-500 text-white rounded-lg shadow-md hover:shadow-xl transition text-white text-center cursor-pointer">
              <h2 className="text-lg p-4 font-semibold">Trustee</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeSelection;

