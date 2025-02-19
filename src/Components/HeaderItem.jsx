import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='flex items-center gap-3 text-[15px] font-semibold cursor-pointer ml-5 hover:underline underline-offset-8 mb-2'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
