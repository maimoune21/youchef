import React, { useRef } from "react";
import { SendIcon } from "/public/icons/Icons";
import { motion } from "framer-motion";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import TextInputGroup from "@/components/ui/TextInputGroup";
import { ImageUpIcon } from "lucide-react";

const PostElements = ({handlechange,animationProps,setData,nextStep,data}) => {
  const fileInputRef = useRef(null);

  return (
      <motion.div {...animationProps} key="step-1" className="relative flex flex-col sm:flex-grow justify-between gap-0.5 w-full px-[15%] py-[4%]">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-9 justify-between sm:flex-grow h-full">
            <div className="flex items-center flex-col justify-start">
              <h2>Meal image</h2>
              {data.image ? (<div className="border-2 w-[180px] h-[120px] rounded-xl flexy "><SendIcon /></div>)
                          : (<div onClick={() => fileInputRef.current.click()} className="border w-[180px] h-[120px] rounded-xl flex items-center justify-center flex-col gap-3 cursor-pointer bg-white hover:bg-gray-50 transition-colors"><ImageUpIcon /><h4>Upload Image</h4></div>)
              }
              <input type="file" ref={fileInputRef} onChange={(e) =>   setData((prevData) => ({ ...prevData, image: e.target.files[0] })) } className="hidden"/>
            </div>
            <div className="flex flex-col justify-start">
              <TextInputGroup label="Meal Title" id='title' placeholder="Add title that describes your Image" value={data.title} onChange={handlechange}/><br />
              <TextAreaGroup label="Description" id='description' placeholder="Enter cuisine type" value={data.description} rows="4" onChange={handlechange}/>
            </div>
        </div>
        <div className="flex justify-end">
            <button className="Nextbutton" onClick={nextStep}>Next</button>
        </div>
      </motion.div>
    )
};

export default PostElements;
