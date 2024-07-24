import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

export default function Blog() {
  return (
    <div className="min-h-screen w-screen bg-white text-black p-10 flex">
      <div className="w-1/3">
        <img src="/logo.png" alt="" />
        <p className="text-[18px] text-[#E3026F] font-sans font-bold font">
          ¡Bienvenido de vuelta!
        </p>
      </div>
      <div className="bg-red-200 w-full flex-grow flex shadow-lg shadow-gray-200  ">
        <div className="bg-white shadow-lg w-[400px]  p-10">
          <h1 className="text-lg font-sans font-bold">Reset password </h1>
          <p className="py-1 font-sans font-medium text-sm">
            Enter new password
          </p>
          <div className="mt-10">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <FiLock className="absolute top-4 left-3 text-gray-500" />
                <input
                  className="w-full  rounded-[108px] border-2 pl-10 px-5 py-3"
                  placeholder="Password"
                  type="text"
                />
              </div>
              <div className="relative">
                <FiLock className="absolute top-4 left-3 text-gray-500" />
                <input
                  className="w-full  rounded-[108px] border-2 pl-10 px-5 py-3"
                  placeholder="Verify password"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <button className="px-5 flex items-center gap-3  py-3 text-sm bg-[#E3026F] font-sans font-bold text-white rounded-[100px]">
                Continuar
                <FaArrowRight />
              </button>
              <p className="font-sans text-[#797979] font-semibold text-xs pt-2">
                Remember Password?{" "}
                <Link className="text-[#E3026F] border-b-2" href={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F6] flex-grow relative flex items-center justify-center">
          <div className="absolute right-5 top-5">
            <select className=" rounded-lg border-2 p-3 bg-white" name="" id="">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          {/* CIRCULOS */}
          <div className="absolute w-6 border-4 h-6 top-64 left-16 border-[#FFC3E0] rounded-full"></div>
          <div className="absolute w-12 border-4 h-12 top-44 right-16 border-[#E3026F] rounded-full"></div>
          {/* LINEAS  */}
          <img className="absolute top-32 left-0" src="/Vector636.png" alt="" />
          <img
            className="absolute bottom-32 right-0"
            src="/Vector636.png"
            alt=""
          />
          {/* IMAGEN CON MOVIMIENTO */}

          <img className="w-[324px]" src="/gifInter.gif" alt="" />

          {/* RECTANGULOS */}

          <div className="absolute left-[164px]  top-4  space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>
          <div className="absolute  top-0  space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>
          <div className="absolute right-[164px] top-4  space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>

          <div className="absolute left-8 bottom-24 flex space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>
          <div className="absolute left-0 bottom-16 flex space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>
          <div className="absolute left-8 bottom-8 flex space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#FFC3E0] w-2 h-2 rotate-45"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
