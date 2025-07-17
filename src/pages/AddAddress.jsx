import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
// input field


const InputField = ({ type, placeholder, name, handleChange, adress }) => (
  <input type={type} placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={adress[name]}
    required
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
  />
)

const AddAddress = () => {

  const [adress, setAdress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdress((prevAddress) => ({
      ...prevAddress,
      [name]: value

    }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }
  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>Add Shiping
        <span className='font-semibold text-primary'>Adress</span></p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10 '>
        <div className='flex-1 max-w-md'>

          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>


            <div className='grid grid-col-2 gap-4'>
              <InputField handleChange={handleChange} adress={adress} name='firstName' type='text' placeholder='First Name ' />
              <InputField handleChange={handleChange} adress={adress} name='lastName' type='text' placeholder='Last Name ' />
            </div>
            <InputField handleChange={handleChange} adress={adress} name='email' type='email' placeholder='Email address ' />
            <InputField handleChange={handleChange} adress={adress} name='street' type='text' placeholder='street' />
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} adress={adress} name='city' type='text' placeholder='City ' />
              <InputField handleChange={handleChange} adress={adress} name='state' type='text' placeholder='State ' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} adress={adress} name='zipCode' type='text' placeholder='Zip Code ' />
              <InputField handleChange={handleChange} adress={adress} name='country' type='text' placeholder='Country ' />

            </div> 

            <InputField handleChange={handleChange} adress={adress} name='phone' type='text' placeholder='Phone ' />

            <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'>Save address</button>
          </form>

        </div>
        <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="adress" />
      </div>

    </div>
  )
}

export default AddAddress