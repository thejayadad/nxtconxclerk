import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex flex-col lg:space-y-6 lg:items-center lg:space-x-6 lg:flex-row w-full max-w-screen-xl mx-auto p-8">
        <div className='lg:flex  items-center w-full space-y-4 lg:space-x-2'>
        <div className='w-full'>
        <input placeholder="Search Title..." className="border w-full p-4 rounded-lg" />

        </div>
        <div className='w-full'>
        <input placeholder="Search Title..." className="border w-full p-4 rounded-lg" />

        </div>
        <div className='w-full'>
        <button className="bg-purple-700 rounded-lg w-full text-white p-4">Search</button>

        </div>
        </div>
    

  </div>
  )
}

export default SearchBar