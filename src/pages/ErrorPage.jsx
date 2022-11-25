import React from 'react'

const ErrorPage = ({error}) => {
  return (
    <div style={{height: 'calc(100vh - 120px)'}} className="flex justify-center items-center">
      <p className='container text-center text-5xl font-semibold text-gray-500 flex flex-col gap-4'>An error has occurred: <span className='text-3xl font-thin'>{error?.message}</span></p>
    </div>
  )
}

export default ErrorPage