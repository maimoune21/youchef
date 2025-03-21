import React from 'react'

const Countries = ({selectedCountry}) => {
  const countries = ['Morocco', 'Canada', 'Japan', 'Brazil', 'Germany', 'Australia', 'India', 'South Africa'];
  return (
    <>
    {countries.map((c, i)=>(
        <option key={i} value={c} selected={c === selectedCountry} className='text-black'>
          {c}
        </option>
    ))
    }
    </>                                       
  )
}

export default Countries;