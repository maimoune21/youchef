import React from 'react';
import { motion } from 'framer-motion';
import TextInputGroup from '@/components/ui/TextInputGroup';
import { CirclePlus, CircleX } from 'lucide-react';

const PostInstructions = ({ handleChange, animationProps, data, setData, nextStep, prevStep, message }) => {
  const handleAddInstruction    = ()      => {setData((prev) => ({...prev,instructions: [...prev.instructions, ""],}));};
  const handleRemoveInstruction = (index) => {setData((prev) => ({...prev,instructions: prev.instructions.filter((_, i) => i !== index),}));};
  return (
    <motion.div {...animationProps} key="step-3" className="relative flex flex-col gap-0.5 justify-between sm:flex-grow w-full px-[15%] py-[4%]">
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-9 sm:flex-grow h-full'>
        <div className='flex flex-col gap-1'>
          <h4 className='font-bold'>Instructions</h4>
          {data.instructions.map(
            (instruction, index) => (
              <div key={index} className="flexy" >
                <span>-</span>
                <span className="flexy gap-2 relative w-full">
                  <TextInputGroup id={`instruction-${index}`} name={`instruction-${index}`} placeholder={`Instruction ${index + 1}`} onChange={handleChange} value={instruction} rows="2" noLabel />
                  <CircleX className="size-5 text-red-700 absolute right-2 cursor-pointer" onClick={() =>handleRemoveInstruction(index)} />
                </span>
              </div>
            )
          )}
          <div className="flexy gap-1 mt-1.5 cursor-pointer" onClick={handleAddInstruction} >
              <CirclePlus className="size-5.5 text-green-700" />
              <b className="text-sm"> Add Instruction </b>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='font-bold'>Duration (HH:MM)</h4>
          <div className='flex items-center w-full gap-2'>
            <input type="number" name="hours"   min='0' max='23' value={data.hours}   onChange={handleChange} className="w-26 p-2 border rounded" /><span className='font-bold'>:</span>
            <input type="number" name="minutes" min='0' max='59' value={data.minutes} onChange={handleChange} className="w-26 p-2 border rounded" />
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-1.5'>
        <div>{message.text && (<div className={`p-2 absolute mb-4 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{message.text}</div>)}</div>
        <div className='flexy gap-2'>
          <button className='Backbutton' onClick={prevStep}>Back</button>
          <button className='Nextbutton' onClick={nextStep}>Next</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostInstructions;