import React from 'react'

const Countries = ({ countries }) => {
  return (
    countries.map((c) => (
      <option key={c.idKitchen} value={c.idKitchen} className='text-black'>
        {c.name}
      </option>
    ))
  )
}

export default Countries;