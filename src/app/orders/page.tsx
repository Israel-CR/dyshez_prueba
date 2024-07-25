import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import { RiLogoutCircleLine, RiLogoutCircleRLine } from "react-icons/ri";

export default function Orders() {
  return (
    <div className="min-h-screen w-screen text-black bg-white">
      <div className="flex  h-screen w-screen  bg-white ">
        <div className="h-screen flex items-center justify-between flex-col border py-5 w-16">
          {/* opciones de navegación */}
          <ul className="w-16 space-y-3 flex flex-col items-center mt-5">
            <img src="/avatarRestaurant.png" className="w-10 h-10" alt="" />
            <li className="relative h-12  w-full flex justify-center items-center group">
              <span className="border-r-[6px] absolute top-0 left-0 border-pink-600 w-1.5 h-full rounded-r"></span>
              <FaShoppingBag className="text-pink-600 text-2xl text-center" />
              <span className="absolute left-full ml-1 bg-pink-600 text-white py-1 px-2 text-sm rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity">
                Orders
              </span>
            </li>

            <li className="relative h-12 w-full flex justify-center items-center group">
              <Link href={"/pictures"}> <IoMdPhotos className="text-gray-400 text-2xl text-center" />
              </Link>
             
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
        <div className="h-screen flex-grow p-10 ">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
          </div>

          <div className="w-full  h-full shadow-2xl flex flex-col">
            <div className="w-full  p-5 border-b">
              <div className="flex items-center space-x-3">
                <h2 className="text-lg font-semibold text-[#101828]">
                  Number of orders
                </h2>
                {/* opciones para filtrar, all, accepted, rejected */}
                <aside className="flex gap-3">
                  <button className="px-4 py-2.5 border border-[#E3026F] text-[#E3026F] rounded-[100px] font-sans   font-bold">
                    All
                  </button>
                  <button className="px-4 py-2.5 border border-[#A6A6A6] text-[#A6A6A6] rounded-[100px] font-sans   font-bold">
                    Acepted(4)
                  </button>
                  <button className="px-4 py-2.5 border border-[#A6A6A6] text-[#A6A6A6] rounded-[100px] font-sans   font-bold">
                    Rejected(3)
                  </button>
                </aside>
              </div>
            </div>
            {/* tabla de ordenes */}
            <div className="flex-grow h-auto w-full ">
              <table className="w-full text-sm">
                <thead>
                  <tr className="flex justify-between items-center py-2 px-4 border-b ">
                    <th className="flex gap-2 w-2/12">
                      Order ID <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-3/12">
                      Customer <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-1/12">
                      Date <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-1/12">
                      Time
                      <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-1/12">
                      Mode
                      <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-1/12">
                      Total
                      <HiArrowsUpDown />
                    </th>
                    <th className="flex gap-2 w-2/12">
                      Payment Method
                      <HiArrowsUpDown />
                    </th>
                    <th className="w-1/12">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex py-2 px-4 border">
                    <td className="w-2/12">#897632</td>
                    <td className="w-3/12">Alicia Vega</td>
                    <td className="w-1/12">21/05/23</td>
                    <td className="w-1/12">2:55 p.m.</td>
                    <td className="w-1/12">Pick Up</td>
                    <td className="w-1/12">$330.00</td>
                    <td className="w-2/12">Stripe</td>
                    <td className="w-1/12">
                      <p className="bg-[#DEF2E6] py-1 px-3 w-full rounded-[100px] font-semibold text-center text-[#11845B]">
                        acepted
                      </p>
                    </td>
                  </tr>
                  <tr className="flex py-2 px-4 border">
                    <td className="w-2/12">#897632</td>
                    <td className="w-3/12">Alicia Vega</td>
                    <td className="w-1/12">21/05/23</td>
                    <td className="w-1/12">2:55 p.m.</td>
                    <td className="w-1/12">Pick Up</td>
                    <td className="w-1/12">$330.00</td>
                    <td className="w-2/12">Stripe</td>
                    <td className="w-1/12">
                      <p className="bg-[#FFEFF0] text-center py-1 px-3 w-full rounded-[100px] font-semibold text-[#DC2B2B]">
                        rejected
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* secccion de paginacion */}
            <section className=" w-full p-2 mb-3 flex justify-center items-center">
              <a href="" className=" " id="1">
                <FaChevronLeft />
              </a>

              <ul className="flex items-center font-medium p-2 text-sm ">
                <li className="rounded-full border-2 border-[#E3026F]  px-3.5 py-2">
                  <a href="" className=" " id="1">
                    1
                  </a>
                </li>
                <li className="rounded-full px-3.5 py-2">
                  <a href="" className=" " id="1">
                    2
                  </a>
                </li>
                <li className="rounded-full  px-3.5 py-2">
                  <a href="" className=" " id="1">
                    3
                  </a>
                </li>
                <li className="rounded-full  px-3.5 py-2">
                  <a href="" className=" " id="1">
                    4
                  </a>
                </li>
                <li className="rounded-full  px-3.5 py-2">
                  <a href="" className=" " id="1">
                    5
                  </a>
                </li>
                <li className="rounded-full   px-3.5 py-2">
                  <a href="" className=" " id="1">
                    6
                  </a>
                </li>
              </ul>
              <a href="" className=" " id="1">
                <FaChevronRight />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
