import React from 'react'

interface InputProps {
  id: string,
  value: string,
  onChange: any,
  label: string,
  type?: string
}

const Input: React.FC<InputProps> = ({ id, value, onChange, label, type }) => {
  return (
    <div className='relative'>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className='block bg-neutral-700 px-6 pt-6 pb-1 rounded-md w-full text-base text-white appearance-none focus:outline-none focus:ring-0 peer'
        placeholder=' '
      />
      <label
        htmlFor={id}
        className='absolute top-4 left-6 text-base text-zinc-400 transform origin-[0] duration-150 scale-75 -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
      >
        {label}
      </label>
    </div>
  )
}

export default Input
