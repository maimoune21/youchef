import React from 'react';
import { motion } from 'framer-motion';
import TextInputGroup from '@/components/ui/TextInputGroup';
import { PostIcon, XCircleIcon } from "/public/icons/Icons";

const PostDetails = ({ handleChange, animationProps, data, setData, nextStep, prevStep, Kitchens, dataCategories, message }) => {
  const addIngredient = () => {
    setData('ingredients', [...data.ingredients, '']);
  };

  const removeIngredient = (index) => {
    setData('ingredients', data.ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...data.ingredients];
    newIngredients[index] = value;
    setData('ingredients', newIngredients);
  };

  return (
    <motion.div {...animationProps} key="step-2" className="relative flex flex-col sm:flex-grow justify-between gap-0.5 w-full px-[15%] py-[4%]">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-9 justify-between sm:flex-grow h-full">
        <div className='flex flex-col'>
          <div className=''>
            <h4 className='font-bold'>Category</h4>
            <select
              value={data.idCategory}
              id='idCategory'
              onChange={handleChange}
              className={`SelectForm ${data.idCategory ? 'text-black' : 'text-gray-500'}`}
            >
              <option value="" disabled>--select category--</option>
              {dataCategories.map((category) => (
                <option key={category.idCategory} value={category.idCategory}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-0.5 mt-3'>
            <h4 className='font-bold'>Ingredients</h4>
            {data.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center">
                <TextInputGroup
                  type="text"
                  placeholder={`Enter ingredient`}
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                />
                <div className="-translate-x-8 cursor-pointer" onClick={() => removeIngredient(index)}>
                  <XCircleIcon />
                </div>
              </div>
            ))}
            <div onClick={addIngredient} className="text-sm flex text-gray-600 rounded items-center justify-end gap-1 cursor-pointer mr-7 italic">
              <PostIcon size='size-3' /> add ingredient
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <h4 className='font-bold'>Kitchen</h4>
          <select
            value={data.idKitchen}
            id='idKitchen'
            onChange={handleChange}
            className={`SelectForm ${data.idKitchen ? 'text-black' : 'text-gray-500'}`}
          >
            <option value="" disabled>--select kitchen--</option>
            {Kitchens.map((kitchen) => (
              <option key={kitchen.idKitchen} value={kitchen.idKitchen}>
                {kitchen.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex justify-between gap-1.5'>
        <div>
          {message.text && (
            <div className={`p-2 absolute mb-4 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message.text}
            </div>
          )}
        </div>
        <div className='flexy gap-2'>
          <button className='Backbutton' onClick={prevStep}>Back</button>
          <button className='Nextbutton' onClick={nextStep}>Next</button>
        </div>
      </div>

    </motion.div>
  );
};

export default PostDetails;