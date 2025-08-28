import Image from "next/image";
import bmi from "./../images/bmi.png";

export default function Page() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full p-8 space-y-6 transform transition-all hover:scale-105 duration-300">
        {/* <!-- Card Content --> */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">BMI Calculator</h1>
          <p className="text-gray-500">คำนวณ BMI</p>
        </div>

        {/* <!-- Image Section --> */}
        <div className="flex justify-center">
          <Image
            src={bmi}
            alt="BMI illustration"
            width={200}
            height={200}
            className=" shadow-lg"
          />
        </div>

        {/* <!-- Input Fields --> */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="weight"
                className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="height"
                className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        {/* <!-- Result Display --> */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">
            ค่า BMI ที่คำนวณได้:{" "}
            <span id="bmi-result" className="text-indigo-600">
              0.00
            </span>
          </p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="flex flex-col space-y-2">
          <button className="w-full bg-indigo-600 text-white rounded-full py-3 font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-200">
            คำนวณ BMI
          </button>
          <button className="w-full bg-gray-200 text-gray-700 rounded-full py-3 font-semibold shadow-md hover:bg-gray-300 transition-colors duration-200">
            รีเซ็ต
          </button>
        </div>
      </div>
    </div>
  );
}
