/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser'
interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser()

  if (!visible) {
    return null
  }

  return (
    <div className='absolute right-0 top-14 w-56 py-5 bg-black border-2 border-gray-800 flex flex-col'>
      <div className='flex flex-col gap-3'>
        <div className='w-full flex flex-row gap-3 items-center px-3 group/item'>
          <img
            src='/images/default-blue.png'
            alt='avatar-account'
            className='w-8 rounded-md'
          />
          <p className='text-white text-sm group-hover/item:underline'>
            {data?.name}
          </p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4' />
        <div
          className='text-white text-center text-sm px-3 hover:underline'
          onClick={() => signOut()}
        >
          Sign out of netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu
