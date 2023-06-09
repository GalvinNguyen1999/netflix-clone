import React from 'react'
interface NavBarItemProps {
  label: String
}

const NavBarItem: React.FC<NavBarItemProps> = ({ label }) => {
  return (
    <div className=' text-white hover:text-gray-300 cursor-pointer transition'>
      {label}
    </div>
  )
}

export default NavBarItem
