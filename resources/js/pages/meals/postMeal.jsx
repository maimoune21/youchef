import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import PostElements from './PostMeal/PostElements';
import PostDetails from './PostMeal/PostDetails';
import PostInstructions from './PostMeal/PostInstructions';
import PostShow from './PostMeal/PostShow';
import Stepper from './PostMeal/Stepper';
import { useForm } from '@inertiajs/react';

const PostMeal = ({ Kitchens, dataCategories }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [step, setStep] = useState(1);
  const page = useRef();
  const [animationProps, setAnimationProps] = useState({});
  const { data, setData, post } = useForm({
    title: '',
    meal_img: null,
    duration: 0,
    description: '',
    ingredients: [''],
    instructions: [''],
    idCategory: '',
    idKitchen: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(prevData => ({ ...prevData, [id]: value }));
  };


  const validateStep1 = () => {
    if (!data.meal_img) {
      setMessage({ text: 'Meal image is required', type: 'error' });
      return false;
    }
    if (!data.title.trim()) {
      setMessage({ text: 'Title is required', type: 'error' });
      return false;
    }
    if (!data.description.trim()) {
      setMessage({ text: 'Description is required', type: 'error' });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!data.idCategory) {
      setMessage({ text: 'Category is required', type: 'error' });
      return false;
    }
    if (!data.idKitchen) {
      setMessage({ text: 'Kitchen is required', type: 'error' });
      return false;
    }
    if (data.ingredients.length === 0 || data.ingredients.every(i => !i.trim())) {
      setMessage({ text: 'At least one ingredient is required', type: 'error' });
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (data.instructions.length === 0 || data.instructions.every(i => !i.trim())) {
      setMessage({ text: 'At least one instruction is required', type: 'error' });
      return false;
    }
    if (!data.duration || data.duration <= 0) {
      setMessage({ text: 'Duration must be greater than 0', type: 'error' });
      return false;
    }
    return true;
  };
  const nextStep = () => {
    let isValid = true;

    if (step === 1) isValid = validateStep1();
    else if (step === 2) isValid = validateStep2();
    else if (step === 3) isValid = validateStep3();

    if (!isValid) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setAnimationProps({
      initial: { x: 900 },
      animate: { x: 0 },
      exit: { x: -900 },
      transition: { duration: 0.5 }
    });
    setStep(step + 1);
    setMessage({ text: '', type: '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setAnimationProps({
      initial: { x: -900 },
      animate: { x: 0 },
      exit: { x: 900 },
      transition: { duration: 0.4 }
    });
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (file) => {
    if (!file) return;
    
    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setMessage({ text: 'Invalid file type. Please upload JPEG, PNG, JPG, or GIF', type: 'error' });
      return;
    }
    // Check file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      setMessage({ text: 'File too large. Max size is 2MB', type: 'error' });
      return;
    }
  
    setData('meal_img', file);
  };



  const PostHandleMeal = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('idCategory', data.idCategory);
      formData.append('idKitchen', data.idKitchen);
      formData.append('duration', data.duration);
      
      data.ingredients.filter(ingredient => ingredient.trim() !== '').forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient);
      });
      data.instructions.filter(instruction => instruction.trim() !== '').forEach((instruction, index) => {
        formData.append(`instructions[${index}]`, instruction);
      });
      if (data.meal_img) {formData.append('meal_img', data.meal_img);}
  
      await post('/postMeal', {
        data: formData,
        onSuccess: () => {window.location.href = '/meals';},
        onError: (errors) => {
          console.log('Full error response:', errors);
          
          // Laravel validation errors
          if (errors?.error) {
            const errorMessages = Array.isArray(errors.error) ? errors.error : [errors.error];
            setMessage({text: errorMessages.join('\n'),type: 'error'});
          } 
          else if (typeof errors === 'string') {setMessage({text: errors,type: 'error'});} 
          else    {setMessage({text: 'An unknown error occurred',type: 'error'});
          }
        },
        forceFormData: true,
      });
    } 
    catch (error) {
      console.error('Unexpected error:', error);
      setMessage({text: 'Network error or server unavailable',type: 'error'});
    }
    finally {setIsSubmitting(false);}
  };


  return (
    <div ref={page} className="flexy w-full">
      <div className='bg-30 max-lg:w-[90%] max-sm:w-[95%] w-[80%] mb-20 md:mb-0 overflow-hidden rounded-3xl border-2 flex flex-col sm:min-h-[75vh]'>
        <div className='flex items-center py-3 pl-5 w-full text-3xl border-b-2'>
          {data.title || 'Title'}
        </div>
        <Stepper step={step - 1} />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <PostElements
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              animationProps={animationProps}
              data={data}
              setData={setData}
              nextStep={nextStep}
              message={message}
            />
          )}
          {step === 2 && (
            <PostDetails
              handleChange={handleChange}
              animationProps={animationProps}
              data={data}
              setData={setData}
              nextStep={nextStep}
              prevStep={prevStep}
              Kitchens={Kitchens}
              dataCategories={dataCategories}
              message={message}
            />
          )}
          {step === 3 && (
            <PostInstructions
              handleChange={handleChange}
              animationProps={animationProps}
              data={data}
              setData={setData}
              nextStep={nextStep}
              prevStep={prevStep}
              message={message}
            />
          )}
          {step === 4 && (
            <PostShow
              animationProps={animationProps}
              data={data}
              dataCategories={dataCategories}
              Kitchens={Kitchens}
              PostMeal={PostHandleMeal}
              prevStep={prevStep}
              isSubmitting={isSubmitting}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PostMeal;