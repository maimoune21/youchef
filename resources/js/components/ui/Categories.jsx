import React from 'react'

const Categorie = ({selectedCategories}) => {
  const categorie = ['Salad', 'Cake', 'Soup', 'Drinks', 'Pasta', 'Snaks'];
  return (
    <>
    {categorie.map((c, i)=>(
        <option key={i} value={c} selected={c === selectedCategories} className='text-black'>
          {c}
        </option>
    ))
    }
    </>                                       
  )
}

export default Categorie;