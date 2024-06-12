import logo from '../../images/logo/todailogobig..png'
import profile from '../../images/profile/person.webp'
import Image from 'next/image';
import { FiHome } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";

export default function Header() {
  return (
    <div className="w-full px-10 py-5 ">
      <div className="flex justify-between ">
        <div className="flex items-center justify-center gap-x-24 ">
          <Image className='fill-current w-30 mr-2' src={logo} width={100} alt='logo' />
          <div className='flex justify-centers'>
            <div>
              <FiHome size={24} />
            </div>
            <div className='px-2'>
              <h3 className='font-extrabold'>Dashboard</h3>
            </div>
          </div>
          <div className='flex justify-centers'>
            <div>
              <BiBookContent size={24} />
            </div>
            <div className='px-2'>
              <h3 className='font-extrabold'>Content Stock</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 ">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center' >
            <FaPlus size={16} />
            <h5 className='px-2'>Create event </h5>
          </button>
          <div className='flex justify-center m-3'>
            <GoLightBulb size={28} style={{ color: 'gray' }} />
          </div>
          <div className='flex row'>
            <div className='flex flex-col justify-center'>
              <Image className='w-10 h-10 rounded-full' src={profile} alt='profile' />
            </div>

            <div className="flex flex-col px-3">
              <h1 className='text-2xl font-extrabold text-black'>Dasboard</h1>
              < p className='text-sm font-normal text-gray-500'>Welcome back,<span className='px-1'>Arow</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}