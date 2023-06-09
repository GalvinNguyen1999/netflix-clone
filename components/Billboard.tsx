import React, { useCallback } from 'react'
import useBillboard from '@/hooks/useBillboard'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import PlayButton from './PlayButton'
import useInfoModal from '@/hooks/useInfoModal'

const Billboard = () => {
  const { data } = useBillboard()
  const { openModal } = useInfoModal()

  const handleOpenModal = useCallback(() => {
    openModal(data?.id)
  }, [openModal, data?.id])

  return (
    <div className='relative h-[56.25vw]'>
      <video
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        autoPlay
        muted
        loop
        className='w-full h-[56.25vw] object-cover brightness-[60%]'
      >
      </video>
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='w-[50%] h-full text-xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='w-[90%] md:w-[80%] lg:w-[50%] text-[8px] md:text-lg text-white mt-3 md:mt-8 drop-shadow-lg'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <PlayButton movieId={data?.id} />
          <button
            className='w-auto bg-white bg-opacity-30 rounded-md px-2 md:px-4 py-1 md:py-2 text-sx lg:text-lg text-white font-semibold flex flex-row items-center hover:bg-opacity-20 transition'
            onClick={handleOpenModal}
          >
            <AiOutlineInfoCircle className='mr-1' />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard
