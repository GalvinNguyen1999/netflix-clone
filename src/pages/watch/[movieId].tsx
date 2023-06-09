import React from 'react'
import useMovie from '@/hooks/useMovie'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Watch = () => {
  const router = useRouter()
  const { movieId } = router.query

  const { data } = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed z-10 w-full p-4 flex items-center gap-8 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft
          size={30}
          className='text-white cursor-pointer'
          onClick={() => router.push('/')}
        />
        <p className='text-xl md:text-3xl text-white font-bold'>
          <span className='font-light'>
            Watching:
          </span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className='w-full h-full'
        autoPlay
        controls
      ></video>
    </div>
  )
}

export default Watch
