import React from "react";
import { motion } from "framer-motion";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import TextInputGroup from "@/components/ui/TextInputGroup";
import { ImageUpIcon } from "lucide-react";

const PostElements = ({ handleChange, handleFileChange, animationProps, data, nextStep, message }) => {
  return (
    <motion.div {...animationProps} key="step-1" className="relative flex flex-col sm:flex-grow justify-between gap-0.5 w-full px-[15%] py-[4%]">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-9 justify-between sm:flex-grow h-full">
        <label htmlFor='fileRef' className="flex items-center flex-col justify-start">
          <h2>Meal image</h2>
          {data.meal_img ? (<div className="flexy flex-col gap-1"><img src={URL.createObjectURL(data.meal_img)} alt="hello" className="w-full h-[150px] rounded-3xl object-cover" />
            <label htmlFor='fileRef' className="button">change picture</label></div>) 
                         : (<div onClick={() => fileInputRef.current.click()} className="border w-[180px] h-[120px] rounded-xl flex items-center justify-center flex-col gap-3 cursor-pointer bg-white hover:bg-gray-50 transition-colors"><ImageUpIcon /><h4>Upload Image</h4></div>)}
        </label>
        <input type="file" id='fileRef' onChange={(e) => handleFileChange(e.target.files[0])} className="hidden"/>
        <div className="flex flex-col justify-start">
          <TextInputGroup label="Meal Title"  name='title'       placeholder="Add title that describes your Image" value={data.title}       onChange={handleChange}/>
          <TextAreaGroup  label="Description" name='description' placeholder="Enter cuisine type"                  value={data.description} onChange={handleChange} rows="4"/>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{message.text && (<div className={`p-2 absolute mb-4 rounded ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{message.text}</div>)}</div>
        <button className="Nextbutton" onClick={nextStep}>Next</button>
      </div>

    </motion.div>
  );
};

export default PostElements