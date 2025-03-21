import React, {useState } from 'react';
import {AnimatePresence} from 'framer-motion';
import { useRef } from 'react';
import PostElements from './PostMeal/PostElements';
import PostDetails from './PostMeal/PostDetails';
import PostInstructions from './PostMeal/PostInstructions';
import PostShow from './PostMeal/PostShow';
import Stepper from './PostMeal/Stepper';


const PostMeal = () => {
  const [step, setStep] = useState(1);
  const page=useRef();
  const [animationProps, setAnimationProps] = useState({});  
  const [data,setData] =useState({title: '' ,description: '',image: '',categorie : '',kitchen: '',ingredients: [{id: 1,value: ''}],instructions: [{ id: 1, value: '' }],duration: 0})

  const handlechange=(e)=>{
    const id=e.target.id
    const value = e.target.value
    setData(prevData=> { 
      return { ...prevData, ...{[id]: value}}
    })
  }


  window.onload = function() {window.scrollTo({top: 0,behavior: 'smooth'})};
  const nextStep = () => {
    setAnimationProps({initial: { x: 900 }, animate: { x: 0 }, exit: { x: -900 },transition:{ duration: 0.5 }});
    setTimeout(()=>setStep(step+1),25);
    window.scrollTo({top:0,behavior: 'smooth'}); 
  }
  const prevStep = () => {
    setAnimationProps({initial: { x: -900 },animate: { x: 0  }, exit: { x: 900 },transition:{ duration: 0.4 }});
    setTimeout(()=>setStep(step-1),25);
    window.scrollTo({top: 0,behavior: 'smooth'})
  };
  
  
  const PostMeal=()=>{console.log(data)}
  return (
    <>
    <div ref={page} className="flexy w-full">
      <div className=' bg-30 max-lg:w-[90%] max-sm:w-[95%] w-[80%] mb-20 md:mb-0 overflow-hidden rounded-3xl border-2 flex flex-col sm:min-h-[75vh]'>
        <div className='flex items-center py-3 pl-5 w-full text-3xl border-b-2'>{data.title || 'Title'}</div>
        <Stepper step={step-1}/>
        <AnimatePresence mode="wait">
          {step === 1 && (<PostElements     handlechange={handlechange} animationProps={animationProps} data={data} setData={setData}   nextStep={nextStep}/>)}
          {step === 2 && (<PostDetails      handlechange={handlechange} animationProps={animationProps} data={data} setData={setData}   nextStep={nextStep} prevStep={prevStep} />)}
          {step === 3 && (<PostInstructions handlechange={handlechange} animationProps={animationProps} data={data} setData={setData}   nextStep={nextStep} prevStep={prevStep} />)}
          {step === 4 && (<PostShow         handlechange={handlechange} animationProps={animationProps} data={data} PostMeal={PostMeal} prevStep={prevStep}/>)}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default PostMeal;
