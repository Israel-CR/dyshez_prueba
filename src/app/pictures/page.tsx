import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { RiLogoutCircleLine, RiLogoutCircleRLine } from "react-icons/ri";

export default function Pictures() {
  return (
    <div className="min-h-screen w-screen text-black bg-white">
      <div className="flex  h-screen w-screen  bg-white overflow-hidden ">
        <div className="h-screen flex items-center justify-between flex-col border py-5 w-16">
          {/* opciones de navegación */}
          <ul className="w-16 space-y-3 flex flex-col items-center mt-5">
            <img src="/avatarRestaurant.png" className="w-10 h-10" alt="" />
            <li className="relative h-12  w-full flex justify-center items-center group">
              <Link href={"/orders"}>
                <FaShoppingBag className="text-gray-400 text-2xl text-center" />
              </Link>

              <span className="absolute left-full ml-1 bg-pink-600 text-white py-1 px-2 text-sm rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity">
                Orders
              </span>
            </li>

            <li className="relative h-12 w-full flex justify-center items-center group">
              <span className="border-r-[6px] absolute top-0 left-0 border-pink-600 w-1.5 h-full rounded-r"></span>
              <IoMdPhotos className="text-pink-600 text-2xl text-center" />
              <span className="absolute left-full ml-1 bg-pink-600 text-white py-1 px-2 text-sm rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity">
                Pictures
              </span>
            </li>
          </ul>
          <div>
            <div className="relative h-12 w-16 flex justify-center items-center group">
              <button>
                <RiLogoutCircleRLine className="text-gray-400 text-2xl text-center" />
              </button>
              <span className="absolute left-full ml-1 bg-pink-600 text-white py-1 px-2 text-sm rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity">
                Salir
              </span>
            </div>
          </div>
        </div>
        
          

          <div className="flex-grow w-full  flex gap-3">
          
            <div className="w-3/5 pl-10 py-10  overflow-auto ">
            
            <h1 className="text-2xl font-bold">Pictures</h1>
          
              <div className="flex flex-wrap gap-3 py-4">
              <button className="w-[124px] h-[124px] text-4xl font-extralight border rounded-lg">
                  +
                </button>
              {[ 1,2,3,4,5,6,7,8,9,10].map((i)=><div className="w-[124px] h-[124px] text-4xl font-extralight border rounded-lg">
                  
                </div>) }
                
              </div>
            </div>
            <div className="w-2/5 py-10 h-[99%] ">
            <div className="bg-[#F4F4F4] overflow-auto h-full py-4  flex flex-col items-center  ">
              <div>
                <p className="text-xs font-bold">Preview 1:1</p>
                <div className="border rounded-xl w-[140px] h-[140px]"></div>
              </div>
              <div>
                <p className="text-xs font-bold">Preview 1:1</p>
                <div className="border rounded-xl w-[256px] h-[144px]"></div>
              </div>
              <div>
                <p className="text-xs font-bold">Preview 1:1</p>
                <div className="border rounded-xl w-[144px] h-[256px]"></div>
              </div>
            </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
