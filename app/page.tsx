import calculator from "./images/calculator.png";
import moneyshare from "./images/moneyshare.png";
import bmi from "./images/bmi.png";
import bmr from "./images/bmr.png";
import carinstallment from "./images/carinstallment.png";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full text-center transform transition-transform duration-500 ease-in-out hover:scale-105">
        {/* <!-- ส่วนของ Header และ Logo --> */}
        <div className="mb-8">
          {/* <!-- โลโก้ (สามารถเปลี่ยน URL เป็นโลโก้ของคุณได้) --> */}
          <div className="flex justify-center items-center mb-4">
            <Image src={calculator} alt="calculator" width={100} height={100}  />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            Calculator Variety
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            เครื่องคำนวณ By DTI-SAU
          </p>
        </div>

        {/* <!-- ส่วนของ Card สำหรับเครื่องคำนวณต่างๆ --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card: Money Share --> */}
          <Link
            href="/moneyshare"
            className="block bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="flex flex-col items-center">
              <Image src={moneyshare} alt="calculator" width={80} height={80}  />
              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                คำนวณ Money Share
              </h3>
              <p className="text-sm text-gray-500">
                แบ่งปันค่าใช้จ่ายกับเพื่อน
              </p>
            </div>
          </Link>

          {/* <!-- Card: BMI --> */}
          <Link
            href="/bmi"
            className="block bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="flex flex-col items-center">
              <Image src={bmi} alt="calculator" width={80} height={80}  />
              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                คำนวณ BMI
              </h3>
              <p className="text-sm text-gray-500">หาค่าดัชนีมวลกาย</p>
            </div>
          </Link>

          {/* <!-- Card: BMR --> */}
          <Link
            href="/bmr"
            className="block bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="flex flex-col items-center">
              <Image src={bmr} alt="calculator" width={80} height={80}  />
              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                คำนวณ BMR
              </h3>
              <p className="text-sm text-gray-500">หาอัตราการเผาผลาญพลังงาน</p>
            </div>
          </Link>

          {/* <!-- Card: Car Installment --> */}
          <Link
            href="/carinstallment"
            className="block bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div className="flex flex-col items-center">
              <Image src={carinstallment} alt="calculator" width={80} height={80}  />
              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                คำนวณ Car Installment
              </h3>
              <p className="text-sm text-gray-500">คำนวณค่างวดรถยนต์</p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-blue-500 text-center">
        Created by DTI-SAU
        <br />
        Copyright &copy; 2025 Southeast Asia University
      </footer>
    </div>
  );
}
