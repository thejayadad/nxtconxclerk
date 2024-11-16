import React from 'react'
import EmptyMessage from '../_components/ui/empty'

const UsersPage = () => {
  return (
    <div className='hidden lg:block lg:pl-80'>
    <EmptyMessage
        title="No Data Available"
        message="Looks like there's nothing here yet. Try adding something!"
      >
        <button className="mt-4 px-4 py-2 bg-primary hover:primary/40 text-white rounded-md">
          Add New Item
        </button>
      </EmptyMessage>
    </div>
  )
}

export default UsersPage