/* eslint-disable @next/next/no-img-element */
import useCurrentUser from '@/hooks/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Profiles = () => {
  const { data: user } = useCurrentUser()
  const router = useRouter()

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl text-center text-white'>
          Who is watching
        </h1>
        <div className='flex items-center justify-center mt-10 gap-8'>
          <div onClick={() => router.push('/')}>
            <div className='group flex-row w-44 mx-auto'>
              <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white group-hover:cursor-pointer overflow-hidden'>
                <img
                  src='/images/default-blue.png'
                  alt='logo-profile'
                />
              </div>
              <div className='mt-4 text-2xl text-center text-gray-400 group-hover:text-white'>
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
