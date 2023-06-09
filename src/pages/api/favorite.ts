import { NextApiRequest, NextApiResponse } from 'next'
import serverAuth from '@/lib/serverAuth'
import prismadb from '@/lib/prismadb'
import { without } from 'lodash'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Post
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req)
      const { movieId } = req.body

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      })

      if (!existingMovie) {
        throw new Error('Invalid id')
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || ''
        },
        data: {
          favoriteIds: {
            push: movieId
          }
        }
      })

      return res.status(200).json(user)
    }

    // Delete
    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req)
      const { movieId } = req.body

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId
        }
      })

      if (!existingMovie) {
        throw new Error('Invalid id')
      }

      const updateFavoriteIds = without(currentUser.favoriteIds, movieId)

      const updateUser = await prismadb.user.update({
        where: {
          email: currentUser.email || ''
        },
        data: {
          favoriteIds: updateFavoriteIds
        }
      })

      return res.status(200).json(updateUser)
    }

    return res.status(405).end()
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
