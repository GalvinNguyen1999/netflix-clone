import React from 'react'
import { useRouter } from 'next/router'
import { BsFillPlayFill } from 'react-icons/bs'

interface PlayButtonProps {
  movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter()

  return (
    <button
      className='w-auto text-xs lg:text-lg font-semibold bg-white rounded-md py-1 md:py-2 px-2 md:px-4 hover:bg-neutral-300 transition cursor-pointer flex items-center'
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill
        size={25}
        className='mr-1'
      />
      Play
    </button>
  )
}

export default PlayButton
