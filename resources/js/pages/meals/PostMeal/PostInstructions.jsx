import React from 'react';
import { motion } from 'framer-motion';

import TextInputGroup from '@/components/ui/TextInputGroup';

import { PostIcon, XCircleIcon } from "/public/icons/Icons";

const PostInstructions = ({ handlechange,animationProps, setData, nextStep, prevStep, data }) => {
  const handleInstructionChange = (id, value) => {
    setData((prevData) => ({
      ...prevData,
      instructions: prevData.instructions.map((e) =>
        e.id === id ? { ...e, value } : e
      ),
    }));
  };
  const addInstruction = () => {
    const newInstruction = { id: data.instructions.length + 1, value: '' };
    setData((prevData) => ({
      ...prevData,
      instructions: [...prevData.instructions, newInstruction],
    }));
  };
  const removeInstruction = (id) => {
    setData((prevData) => ({
      ...prevData,
      instructions: prevData.instructions.filter((e) => e.id !== id),
    }));
  };
  return (
      <motion.div {...animationProps} key="step-3" className="relative flex flex-col gap-0.5 justify-between sm:flex-grow w-full px-[15%] py-[4%]">
      
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-9 sm:flex-grow h-full '>
          <div className=' flex flex-col gap-2'>
                <h4 className='font-bold'>Instructions</h4>
                {data.instructions.map((el) => (
                  <div key={el.id} className="flex items-center">
                    <TextInputGroup type="text" placeholder={`Enter ingredient ${el.id}`} value={el.value} onChange={(e) => handleInstructionChange(el.id, e.target.value)} />
                    <div className="-translate-x-8 cursor-pointer" onClick={() => removeInstruction(el.id)}>
                      <XCircleIcon />
                    </div>
                  </div>
                ))}
                <div onClick={addInstruction} className="text-sm flex text-gray-600 rounded items-center justify-end gap-1 cursor-pointer mt-3 mr-7 italic">
                  <PostIcon size='size-3' />add instructions
                </div>
          </div>
          <div className='flex flex-col gap-1'>
                <h4 className='font-bold'>Duration (min)</h4>
                <TextInputGroup type="number" id='duration' placeholder="Enter step 2" value={data.duration} onChange={handlechange} />
            </div>
          </div>
      <div className='flex justify-end gap-1.5'>
          <button className='Backbutton' onClick={prevStep}>Back</button>
          <button className='Nextbutton' onClick={nextStep}>Next</button>
      </div>

    </motion.div>
    

  )
}

export default PostInstructions;
