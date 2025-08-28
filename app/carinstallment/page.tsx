import Image from "next/image";
import carinstallment from "./../images/carinstallment.png";

export default function Page() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
    <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full p-8 space-y-6 transform transition-all hover:scale-105 duration-300">
        {/* <!-- Card Content --> */}
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">Car Installment Calculator</h1>
            <p className="text-gray-500">คำนวณ Car Installment</p>
        </div>
        
        {/* <!-- Image Section --> */}
        <div className="flex justify-center">
            <Image src={carinstallment} alt="Car illustration" className="shadow-lg" width={200} height={200}/>
        </div>

        {/* <!-- Input Fields --> */}
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">ชื่อผู้คำนวณ</label>
                <div className="mt-1">
                    <input type="text" id="name" className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2" placeholder="ชื่อของคุณ"/>
                </div>
            </div>
            <div>
                <label  className="block text-sm font-medium text-gray-700">ราคารถ (บาท)</label>
                <div className="mt-1">
                    <input type="number" id="car-price" className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2" placeholder="0.00"/>
                </div>
            </div>
            <div>
                <label  className="block text-sm font-medium text-gray-700">ดอกเบี้ยต่อปี (%)</label>
                <div className="mt-1">
                    <input type="number" id="interest" className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2" placeholder="0.00"/>
                </div>
            </div>
        </div>

        {/* <!-- Down Payment Selection --> */}
        <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">เงินดาวน์ (%):</p>
            <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="down-payment" value="15" className="form-radio text-indigo-600 focus:ring-indigo-500" checked/>
                    <span className="ml-2 text-gray-700">15%</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="down-payment" value="20" className="form-radio text-indigo-600 focus:ring-indigo-500"/>
                    <span className="ml-2 text-gray-700">20%</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="down-payment" value="25" className="form-radio text-indigo-600 focus:ring-indigo-500"/>
                    <span className="ml-2 text-gray-700">25%</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="down-payment" value="30" className="form-radio text-indigo-600 focus:ring-indigo-500"/>
                    <span className="ml-2 text-gray-700">30%</span>
                </label>
                <label className="inline-flex items-center">
                    <input type="radio" name="down-payment" value="35" className="form-radio text-indigo-600 focus:ring-indigo-500"/>
                    <span className="ml-2 text-gray-700">35%</span>
                </label>
            </div>
        </div>

        {/* <!-- Loan Term Selection --> */}
        <div>
            <label  className="block text-sm font-medium text-gray-700">จำนวนเดือนที่ผ่อน</label>
            <div className="mt-1">
                <select id="loan-term" className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2">
                    <option value="24" selected>24 เดือน</option>
                    <option value="36">36 เดือน</option>
                    <option value="48">48 เดือน</option>
                    <option value="60">60 เดือน</option>
                    <option value="72">72 เดือน</option>
                </select>
            </div>
        </div>

        {/* <!-- Result Display --> */}
        <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">ผ่อนชำระต่อเดือน: <span id="monthly-payment" className="text-indigo-600">0.00</span> บาท</p>
        </div>
        
        {/* <!-- Buttons --> */}
        <div className="flex flex-col space-y-2">
            <button className="w-full bg-indigo-600 text-white rounded-full py-3 font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-200">
                คำนวณ
            </button>
            <button className="w-full bg-gray-200 text-gray-700 rounded-full py-3 font-semibold shadow-md hover:bg-gray-300 transition-colors duration-200">
                ล้างข้อมูล
            </button>
        </div>
    </div>
</div>
  )
}
