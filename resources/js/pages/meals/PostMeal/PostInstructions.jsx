import React from 'react';
import { motion } from 'framer-motion';
import TextInputGroup from '@/components/ui/TextInputGroup';
import { PostIcon, XCircleIcon } from "/public/icons/Icons";

const PostInstructions = ({ handleChange, animationProps, data, setData, nextStep, prevStep, message }) => {
  const addInstruction = () => {
    setData('instructions', [...data.instructions, '']);
  };

  const removeInstruction = (index) => {
    setData('instructions', data.instructions.filter((_, i) => i !== index));
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...data.instructions];
    newInstructions[index] = value;
    setData('instructions', newInstructions);
  };

  return (
    <motion.div {...animationProps} key="step-3" className="relative flex flex-col gap-0.5 justify-between sm:flex-grow w-full px-[15%] py-[4%]">
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-9 sm:flex-grow h-full'>
        <div className='flex flex-col gap-2'>
          <h4 className='font-bold'>Instructions</h4>
          {data.instructions.map((instruction, index) => (
            <div key={index} className="flex items-center">
              <TextInputGroup
                type="text"
                placeholder={`Step ${index + 1}`}
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
              />
              <div className="-translate-x-8 cursor-pointer" onClick={() => removeInstruction(index)}>
                <XCircleIcon />
              </div>
            </div>
          ))}
          <div onClick={addInstruction} className="text-sm flex text-gray-600 rounded items-center justify-end gap-1 cursor-pointer mr-7 italic">
            <PostIcon size='size-3' />add instructions
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='font-bold'>Duration (min)</h4>
          <TextInputGroup type="number" id='duration' placeholder="Enter Duration Here ...." value={data.duration || ""} onChange={handleChange} />
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

export default PostInstructions;