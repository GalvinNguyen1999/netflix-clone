/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useCallback, useState } from 'react'
import Input from '@/components/Input'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

/* eslint-disable @next/next/no-img-element */
const auth = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles'
      })
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })

      login()
    } catch (error) {
      console.log(error)
    }
  }, [email, name, password, login])

  return (
    <div className='relative w-full h-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img
            src='/images/logo.png'
            alt='netflix-logo'
            className='h-12'
          />
        </nav>

        <div className='flex justify-center'>
          <div className='w-full bg-black bg-opacity-70 px-16 py-16 mt-2 self-center lg:w-2/5 lg:max-w-md rounded-md'>
            <h2 className='text-white text-4xl font-semibold mb-16'>
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  id='user'
                  value={name}
                  onChange={(event: any) => setName(event.target.value)}
                  label='User Name'
                />
              )}
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(event: any) => setEmail(event.target.value)}
                label='Email'
              />
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
                label='Password'
              />
            </div>
            <button
              className='bg-red-600 py-3 mt-10 text-white rounded-md w-full transition hover:bg-red-700'
              onClick={variant === 'login' ? login : register}
            >
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <div className='flex flex-row items-center justify-center gap-4 mt-8'>
              <div
                className='flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-70 transition'
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              >
                <FcGoogle size={30} />
              </div>
              <div
                className='flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-70 transition'
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className='text-neutral-500 mt-12'>
              {variant === 'login' ? 'First time using Netflix?' : 'Already has an account?'}
              <span
                className='text-white ml-1 cursor-pointer hover:underline'
                onClick={toggleVariant}
              >
                {variant === 'login' ? 'Create and account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default auth
