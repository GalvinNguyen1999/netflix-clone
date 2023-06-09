import React from 'react'

interface MobileMenuProps {
  visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className='bg-black w-56 py-5 flex flex-col absolute top-8 left-0 border-2 border-gray-800'>
      <div className='flex flex-col gap-4'>
        <div className='text-white text-center hover:underline px-3'>
          Home
        </div>
        <div className='text-white text-center hover:underline px-3'>
          Series
        </div>
        <div className='text-white text-center hover:underline px-3'>
          Fimls
        </div>
        <div className='text-white text-center hover:underline px-3'>
          News & Popular
        </div>
        <div className='text-white text-center hover:underline px-3'>
          My List
        </div>
        <div className='text-white text-center hover:underline px-3'>
          Browes by languagues
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
