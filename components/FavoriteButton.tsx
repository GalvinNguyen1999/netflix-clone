import axios from 'axios'
import React, { useCallback, useMemo } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let response

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId } })
    } else {
      response = await axios.post('/api/favorite', { movieId })
    }

    const updateFavoriteIds = response?.data?.favoriteIds

    mutate({
      ...currentUser,
      favoriteIds: updateFavoriteIds
    })

    mutateFavorites()
  }, [movieId, currentUser, isFavorite, mutate, mutateFavorites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div
      className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex flex-row justify-center items-center hover:border-neutral-300 transition group/item'
      onClick={toggleFavorites}
    >
      <Icon className='text-white' size={25} />
    </div>
  )
}

export default FavoriteButton
