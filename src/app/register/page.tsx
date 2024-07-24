import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiGlobe, FiLock, FiMail, FiPhone, FiSmartphone, FiUser } from "react-icons/fi";

export default function Blog() {
  return (
    <div className="min-h-screen overflow-x-hidden w-screen bg-white text-black py-10 px-20 flex">
      <div className="w-1/3">
        <img src="/logo.png" alt="" />
        <p className="text-[18px] text-[#E3026F] font-sans font-bold font">
          ¡Bienvenido de vuelta!
        </p>
      </div>
      <div className="bg-white flex-grow flex shadow-lg">
        <div className="w-full   p-10">
          <div className="flex justify-between text-2xl font-sans font-bold">
            <Link href={'/login'} className="text-[#A6A6A6]" >
              Login
            </Link>
            <Link href={''} className="text-[#0C0C0C] border-[#0C0C0C] pb-2 border-b-4">Register</Link>
          </div>
          <p className="mt-5 font-sans font-semibold text-center">
            
          Únete a la revolución, para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del movimiento de Dyshez.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-4">
              <div className="relative">
              <FiUser className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Nombre(s)"
                type="text"
              />
                
              </div>
              <div className="relative">
              <FiSmartphone className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="1234567890*"
                type="text"
              />
              </div>
              <div className="relative">
              <FiGlobe className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Sitio Web"
                type="text"
              />
              </div>
              <div className="relative">
              <FiLock className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Contraseña*"
                type="text"
              />
              </div>
            </div>  
            <div className="flex flex-col gap-4">
             <div className="relative">
              <FiUser className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Apellidos*"
                type="text"
              />
              </div>
              <div className="relative">
              <FiPhone className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="1234567890"
                type="text"
              />
              </div>

              <div className="relative">
              <FiMail className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Email*"
                type="text"
              />
              </div>
              <div className="relative">
              <FiLock className="absolute top-4 left-3 text-lg text-gray-500"/>
                <input
                className="w-full rounded-[108px] border-2 pl-10 px-5 py-3"
                placeholder="Verificar contraseña"
                type="text"
              />
              </div>
            </div> 
            </div>
            <p className="text-center pt-4">
              <input className="w-10 h-4 bg-pink-200" type="checkbox" name="" id="" />     Acepto los términos y condiciones
            </p>
            
            <div className="mt-10 flex flex-col items-center">
              <button className="px-5 py-3 flex gap-3 items-center text-sm bg-[#E3026F] font-sans font-bold text-white rounded-[100px]">
               Crear Cuenta
               <FaArrowRight/>
              </button>
              <p className="font-sans text-[#797979] font-semibold text-xs pt-3">
              Si ya tienes un restaurante en Dyshez y quieres agregar una <b>nueva sucursal</b>, conoce cómo hacerlo

              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
