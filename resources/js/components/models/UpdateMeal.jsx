import { Dialog, DialogContent, DialogTrigger, DialogTitle , DialogDescription } from "@/components/ui/dialog";
import { CheckIcon, EditIcon, PencilIcon } from "@/../../public/icons/Icons";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import TextInputGroup from "../ui/TextInputGroup";
import TextAreaGroup from "../ui/TextAreaGroup";
import {useState } from "react";
import { ChevronLeft, CirclePlus, CircleX} from "lucide-react";
import { router, useForm } from '@inertiajs/react';


export function UpdateMeal({ buttonStyles = "", meal , dataCategories, dataKitchens}) {
    // const [touched, setTouched] = useState({title: false,description: false,});
    const [hours, minutes] = meal.duration.split(':').map(Number);

    const { data, setData, put , errors, setError, clearErrors } = useForm({ 
      title: meal.title, 
      meal_img: meal.meal_img, 
      hours: hours, 
      minutes: minutes, 
      description: meal.description, 
      ingredients: JSON.parse(meal.ingredients), 
      instructions: JSON.parse(meal.instructions), 
      idCategory: meal.idCategory, 
      idKitchen: meal.idKitchen, 
    });


    const handleFileChange = (file) => {
      if (!file) return;
      const validTypes = ['image/jpeg','image/jpg'];
      if (!validTypes.includes(file.type))    {setMessage({ text: 'Enter image type JPEG or JPG',          type: 'error' });return;}
      if (file.size > 2 * 1024 * 1024)        {setMessage({ text: 'File too large. Max size is 2MB',       type: 'error' });return;}
      setData('meal_img', file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // if (!touched[name]) {setTouched(prev => ({ ...prev, [name]: true }));}
        // if (errors[name]) {clearErrors(name);}

        if (name.startsWith("ingredient-")) {
            const index = parseInt(name.split("-")[1]);
            setData((prev) => ({...prev,ingredients: prev.ingredients.map((item, i) =>i === index ? value : item),}));
        }
        else if (name.startsWith("instruction-")) {
            const index = parseInt(name.split("-")[1]);
            setData((prev) => ({...prev,instructions: prev.instructions.map((item, i) =>i === index ? value : item),}));
        } 
        else {setData((prev) => ({ ...prev, [name]: value }));}   
    };

    const handleAddIngredient     = ()      => {setData((prev) => ({...prev,ingredients:  [...prev.ingredients, ""],}));};
    const handleRemoveIngredient  = (index) => {setData((prev) => ({...prev,ingredients:  prev.ingredients.filter((_, i) => i !== index),}));};
    const handleAddInstruction    = ()      => {setData((prev) => ({...prev,instructions: [...prev.instructions, ""],}));};
    const handleRemoveInstruction = (index) => {setData((prev) => ({...prev,instructions: prev.instructions.filter((_, i) => i !== index),}));};


    // const validation = () => {
    //   const newErrors = {};
    //   let isValid = true;

    //   if (!data.title.trim())                                                        {newErrors.title = ['Title is required'];isValid = false;}
    //   if (!data.description.trim())                                                  {newErrors.description = ['Description is required'];isValid = false;}
    //   if (!data.idCategory)                                                          {newErrors.idCcategory = ['category is required'];isValid = false;}
    //   if (!data.idKitchen)                                                           {newErrors.idKitchen = ['kitchen is required'];isValid = false;}
    //   if (data.ingredients.length === 0 || data.ingredients.every(i => !i.trim()))   {newErrors.ingredients = ['At least one ingredient is required'];isValid = false;}
    //   if (data.ingredients.some(ing => !ing.trim()))                                 {newErrors.ingredients = ['Please fill all ingredient fields'];isValid = false;}
    //   if (data.instructions.length === 0 || data.instructions.every(i => !i.trim())) {newErrors.instructions = ['At least one instruction is required'];isValid = false;}
    //   if (data.instructions.some(inst => !inst.trim()))                              {newErrors.instructions = ['Please fill all instruction fields'];isValid = false;}
    //   if (isNaN(data.hours))                                                         {newErrors.hours = ['Hours is required'];isValid = false;} 
    //   else if (data.hours < 0 || data.hours > 23)                                    {newErrors.hours = ['Hours must be between 0-23'];isValid = false;}
    //   if (isNaN(data.minutes))                                                       {newErrors.minutes = ['Minutes is required'];isValid = false;} 
    //   else if (data.minutes < 0 || data.minutes > 59)                                {newErrors.minutes = ['Minutes must be between 0-59'];isValid = false;} 
    //   else if (data.hours === 0 && data.minutes === 0)                               {newErrors.minutes = ['Duration must be at least 1 minute'];isValid = false;}
      
    //   setError(newErrors);
    //   return isValid;
    // };


    const handleSubmit = (e) => {
      e.preventDefault();
      // if (!validation()) {window.scrollTo({ top: 0, behavior: 'smooth' });return;}

      // put(`/meals/${meal.idMeal}`, {
      //   data: data,
      //   onSuccess: () => {
      //     console.log('success - meal updated');
      //   },
      //   onError: (errors) => {
      //     if (errors) {
      //       console.log('error - update failed', errors);
      //     }
      //   }
      // });  

      router.post(`/meals/${meal.idMeal}`, formData, {
        onSuccess: () => {
          console.log('success - meal updated');
        },
        onError: (errors) => {
          console.log('error - update failed', errors);
        },
      });
  };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={`button hover:bg-green-600! rounded-full! flex gap-2 py-2! ${buttonStyles}`} ><b>Update</b><PencilIcon size="size-5" /></button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-w-5xl! p-0 pt-12 rounded-sm">
              <DialogTitle className="sr-only">{meal.title}</DialogTitle>
              <DialogDescription className="sr-only">Update meal details</DialogDescription>
              <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-8 px-4 max-h-[80vh] overflow-auto scrollbar mt-1 tn:px-10">

                      <h1 className="w-full border-b-1 px-11 py-3 border-black text-center font-bold text-xl absolute top-0 left-1/2 transform -translate-x-1/2">{meal.title}</h1>

                      <div className="flex flex-col gap-4 pt-2">
                          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-2 gap-12">
                              <div className="flex flex-col gap-7">
                                  <div className="relative custom-shadow rounded-lg">
                                      <input type="file" id='fileRef'  onChange={(e) => handleFileChange(e.target.files[0])} className="hidden"/>
                                      <label htmlFor="fileRef" className="cursor-pointer" >
                                          <img className="w-full rounded-lg" alt="meal" src={ data.meal_img instanceof File ? URL.createObjectURL(data.meal_img) : meal.meal_img ? `/uploads/meals/${meal.meal_img}` : BlankMeal}  />
                                          <div className="absolute right-0 top-0 p-1 bg-30 text-black rounded-bl-lg rounded-tr-lg shadow-[-5px_5px_10px_hsla(0,0%,0%,0.2)]"><EditIcon /></div>
                                      </label>
                                  </div>
                                  <div className="flex flex-col gap-4">
                                      <span className="flexy gap-4"><TextInputGroup label="Title: " name="title" id="title" placeholder="" classLabel="font-bold" onChange={handleChange} value={data.title}/></span>
                                      <span>                        <TextAreaGroup  label="Description: " classLabel="font-bold" name="description" id="description" placeholder="Description..." rows="4" onChange={handleChange} value={data.description} /> </span>
                                  </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                  <span className="flex flex-col gap-0.5"> 
                                      <h4 className='font-bold'>Category</h4>
                                      <select value={data.idCategory} name='idCategory' onChange={handleChange} className='SelectForm text-black' >
                                        {dataCategories.map((category) => (<option key={category.idCategory} value={category.idCategory}>{category.name}</option>))}
                                      </select>
                                  </span>
                                  <span className="flex flex-col gap-0.5"> 
                                    <h4 className='font-bold'>Kitchen</h4>
                                    <select value={data.idKitchen} name='idKitchen' onChange={handleChange} className='SelectForm text-black' >
                                      {dataKitchens.map((kitchen) => (<option key={kitchen.idKitchen} value={kitchen.idKitchen}>{kitchen.name}</option>))}
                                    </select>
                                  </span>
                                  <span className="flex flex-col gap-0.5"> 
                                    <h4 className='font-bold'>Duration (HH:MM)</h4>
                                    <div className='flex items-center w-full gap-2'>
                                      <input type="number" name="hours"   value={data.hours}   onChange={handleChange} className="w-26 p-2 border rounded" /><span className='font-bold'>:</span>
                                      <input type="number" name="minutes" value={data.minutes} onChange={handleChange} className="w-26 p-2 border rounded" />
                                    </div>
                                  </span>
                                  <span className="flex flex-col gap-0.5">
                                      <label className="font-bold">Ingredients:</label>
                                      <div className="flex flex-col gap-1">
                                        {data.ingredients.map(
                                          (ingredient, index) => (
                                            <div key={index} className="flexy gap-2">
                                              <span className="flexy gap-1 relative w-full">
                                                <span>-</span>
                                                <TextInputGroup name={`ingredient-${index}`} id={`ingredient-${index}`} placeholder={`Ingredient ${index + 1}`} onChange={handleChange} value={ingredient} noLabel/>
                                                <CircleX className="size-5 text-red-700 absolute right-2 cursor-pointer" onClick={() =>handleRemoveIngredient(index)} />
                                              </span>
                                            </div>
                                          )
                                        )}
                                      </div>
                                      <div className="flexy gap-1 mt-1.5 cursor-pointer" onClick={handleAddIngredient} >
                                          <CirclePlus className="size-5.5 text-green-700" />
                                          <b className="text-sm"> Add Ingredient </b>
                                      </div>
                                  </span>
                                  <span className="flex flex-col gap-0.5">
                                      <label className="font-bold">
                                          Instructions:
                                      </label>
                                      <div className="flex flex-col gap-1 ite">
                                        {data.instructions.map(
                                          (instruction, index) => (
                                            <div key={index} className="flexy" >
                                              <span>-</span>
                                              <span className="flexy gap-2 relative w-full">
                                                <TextAreaGroup id={`instruction-${index}`} name={`instruction-${index}`} placeholder={`Instruction ${index + 1}`} onChange={handleChange} value={instruction} rows="2" noLabel />
                                                <CircleX className="size-5 text-red-700 absolute right-2 cursor-pointer" onClick={() =>handleRemoveInstruction(index)} />
                                              </span>
                                            </div>
                                          )
                                        )}
                                      </div>
                                      <div className="flexy gap-1 mt-1.5 cursor-pointer" onClick={handleAddInstruction} >
                                          <CirclePlus className="size-5.5 text-green-700" />
                                          <b className="text-sm"> Add Instruction </b>
                                      </div>
                                  </span>
                              </div>
                          </div>
                          <div className="flexy gap-6 pb-8">
                              {/* {Object.keys(errors).length > 0 && (
                                <div className="p-2 mb-4 rounded bg-red-100 text-red-700">
                                  {Object.entries(errors).map(([field, error], index) => (
                                    touched[field] && <div key={index}>{error}</div>
                                  ))}
                                </div>
                              )}*/}
                          
                              <button className="Backbutton py-0.5! pr-4! pl-0!"><b><ChevronLeft className="size-8" /></b><b>Discard</b></button>
                              <button type="submit" className="Nextbutton gap-2 py-1.5! px-2! pl-4!"><b>Save</b><CheckIcon size="size-6" /></button>
                          </div>
                      </div>
                  </div>
                </form>
              </DialogContent>
        </Dialog>
    );
}
