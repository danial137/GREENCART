import React from 'react'
import {assets} from '../assets/assets'
// input field


const inputField=(() => {
    <input type="text" />
})

const AddAddress = () => {
  return (
      <div className='mt-16 pb-16'>
          <p className='text-2xl md:text-3xl text-gray-500'>Add Shiping
        <span className='font-semibold text-primary'>Adress</span></p>
      
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10 '>
        <div></div>
        <img src={assets.add_address_iamge} alt="" />
      </div>

    </div>
  )
}

export default AddAddress