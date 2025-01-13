import { FaRegCircleUser } from 'react-icons/fa6'

const CommonTopBar = () => {
  return (
    <div className="w-[calc(100vw-80px)] h-12 bg-white top-0 left-[70px] absolute p-0 m-0 z-10 flex justify-end items-center px-10">
      <FaRegCircleUser className="text-2xl text-[#71717a]" />
    </div>
  )
}

export default CommonTopBar
