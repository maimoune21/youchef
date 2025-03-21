import React from 'react';
import { motion } from 'framer-motion';

import Categorie from '@/components/ui/Categories';
import Countries from '@/components/ui/Countries';
import TextInputGroup from '@/components/ui/TextInputGroup';

import { PostIcon, XCircleIcon } from "/public/icons/Icons";


const PostDetails = ({handlechange, animationProps, setData, nextStep, prevStep, data }) => {
  const addIngredient = () => {
    const newIngredient = { id: data.ingredients.length + 1, value: '' };
    setData((prevData) => ({
      ...prevData,
      ingredients: [...prevData.ingredients, newIngredient],
    }));
  };

  const removeIngredient = (id) => {
    setData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.filter((e) => e.id !== id),
    }));
  };
  const handleIngredientChange = (id, value) => {
    setData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.map((e) =>
        e.id === id ? { ...e, value } : e
      ),
    }));
  };
  return (
    <motion.div {...animationProps} key="step-2" className="relative flex flex-col sm:flex-grow justify-between gap-0.5 w-full px-[15%] py-[4%]">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-9 justify-between sm:flex-grow h-full">

        <div className=' flex flex-col'>

          <div className=''>
            <h4 className='font-bold'>Categorie</h4>
            <select value={data.categorie} id='categorie' onChange={handlechange} className={`SelectForm ${data.categorie ? 'text-black' : 'text-gray-500'}`}>
              <option value="" disabled selected>--select categorie</option>
              <Categorie />
            </select>
          </div>

          <div className='flex flex-col gap-0.5 mt-3'>
            <h4 className='font-bold'>Ingredients</h4>
            {data.ingredients.map((el) => (
              <div key={el.id} className="flex items-center">
                <TextInputGroup type="text" placeholder={`Enter ingredient ${el.id}`} value={el.value} onChange={(e) => handleIngredientChange(el.id, e.target.value)} />
                <div className="-translate-x-8 cursor-pointer" onClick={() => removeIngredient(el.id)}>
                  <XCircleIcon />
                </div>
              </div>
            ))}
            <div onClick={addIngredient} className="text-sm flex text-gray-600 rounded items-center justify-end gap-1 cursor-pointer mr-7 italic">
              <PostIcon size='size-3' /> add ingredient
            </div>
          </div>

        </div>

        <div className='flex flex-col '>
          <h4 className='font-bold'>kitchen</h4>
          <select value={data.kitchen} id='kitchen' onChange={handlechange} className={`SelectForm ${data.kitchen ? 'text-black' : 'text-gray-500'}`}>
            <option value="" disabled selected>--select categorie</option>
            <Countries />
          </select>
        </div>

      </div>

      <div className='flex justify-end gap-1.5'>
        <button className='Backbutton' onClick={prevStep}>Back</button>
        <button className='Nextbutton' onClick={nextStep}>Next</button>
      </div>
    </motion.div>
  )
}

export default PostDetails;
