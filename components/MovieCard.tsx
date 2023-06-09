/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import FavoriteButton from './FavoriteButton'
import { useRouter } from 'next/router'
import useInfoModal from '@/hooks/useInfoModal'

interface MovieCardProps {
  data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter()
  const { openModal } = useInfoModal()

  return (
    <div className='relative group h-[12vw] bg-zinc-900 col-spans'>
      <img
        src={data?.thumbnailUrl}
        alt='Thumbnail'
        className='w-full h-[12vw] cursor-pointer object-cover rounded-md shadow-xl transition duration delay-300 group-hover:opacity-90 sm:group-hover:opacity-0'
      />
      <div className='w-full absolute top-0 opacity-0 z-10 invisible md:visible transition duration-200 delay-300 scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <img
          src={data?.thumbnailUrl}
          alt='ThumbnailImg'
          className='w-full h-[12vw] rounded-t-md shadow-xl object-cover cursor-pointer transition duration'
        />
        <div className='absolute w-full bg-zinc-800 z-10 p-2 lg:p-4 shadow-md rounded-b-md transition'>
          <div className='flex flex-row items-center gap-3'>
            <div
              className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full hover:bg-neutral-300 transition flex justify-center items-center'
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'
              onClick={() => openModal(data?.id)}
            >
              <BiChevronDown size={30} className='text-white group-hover/item:text-neutral-300' />
            </div>
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            New {` `}
            <span className='text-white'>2023</span>
          </p>
          <div className='flex flex-row items-center mt-4 gap-3'>
            <p className='text-white text-[10px] lg:text-xs'>
              {data?.duration}
            </p>
          </div>
          <div className='flex flex-row items-center mt-4 gap-3'>
            <p className='text-white text-[10px] lg:text-xs'>
              {data?.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
