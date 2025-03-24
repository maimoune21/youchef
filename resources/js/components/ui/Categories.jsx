import React from 'react'

const Categorie = ({ categories }) => {
  return (
    <>
    {categories.map((c)=>(
        <option key={c.idCategory} value={c.idCategory} className='text-black'>
          {c.name}
        </option>
    ))
    }
    </>                                       
  )
}

export default Categorie;