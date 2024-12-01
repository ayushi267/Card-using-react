import React from 'react'

const Card = (props) => {
  console.log(props.city)
    
  return (
  <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>
    <img className='ml-8 h-32 w-32 rounded-full text-2xl font-semibold mb-3' src="" alt=""></img>
    <h1 className='text-3xl font-semibold mb-4'>{props.name}</h1>
    <h2>{props.city},{props.age}</h2>
    <button className='mt-5 bg-emerald-700 text-white px-4b py-3 rounded font-me '>Add friend</button>
  </div>
  )
}

export default Card
