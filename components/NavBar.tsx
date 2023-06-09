import { useCallback, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import NavBarItem from './NavBarItem'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import AccountMenu from './AccountMenu'

/* eslint-disable @next/next/no-img-element */
const TOP_OFFSET = 66

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)

  }, [])
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img
          src='/images/logo.png'
          alt='logo'
          className='h-4 lg:h-7'
        />
        {/* Desktop Navigation */}
        <div className='flex-row lg:flex ml-8 gap-7 hidden'>
          <NavBarItem label='Home' />
          <NavBarItem label='Series' />
          <NavBarItem label='Films' />
          <NavBarItem label='News & Popular' />
          <NavBarItem label='My List' />
          <NavBarItem label='Browes by languagues' />
        </div>
        {/* Mobile Navigation */}
        <div
          className='lg:hidden flex flex-row items-center ml-8 gap-2 cursor-pointer relative'
          onClick={toggleMobileMenu}
        >
          <p className='text-white text-sm'>
            Browes
          </p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row items-center ml-auto gap-7'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div
            className='flex flex-row items-center gap-2 cursor-pointer relative'
            onClick={toggleAccountMenu}
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <img
                src='/images/default-blue.png'
                alt='avatar'
              />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
