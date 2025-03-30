import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckIcon, EditIcon, PencilIcon } from "@/../../public/icons/Icons";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import TextInputGroup from "../ui/TextInputGroup";
import TextAreaGroup from "../ui/TextAreaGroup";
import { useState } from "react";
import { ChevronLeft, CirclePlus, CircleX} from "lucide-react";

export function UpdateMeal({ buttonStyles = "", meal }) {
    const ingredientsArray  = typeof meal.ingredients  === "string"? JSON.parse(meal.ingredients) : meal.ingredients ;
    const instructionsArray = typeof meal.instructions === "string"? JSON.parse(meal.instructions): meal.instructions;

    const [data, setData] = useState({ title: meal.title, meal_img: meal.meal_img, duration: meal.duration, description: meal.description, ingredients: ingredientsArray, instructions: instructionsArray, views: meal.views, likes: meal.likes, category: meal.categoryName, kitchen: meal.kitchenName, });

    const handleChange = (e) => {
        const { name, value } = e.target;
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

    
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data);
  }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={`button hover:bg-green-600! rounded-full! flex gap-2 py-2! ${buttonStyles}`} ><b>Update</b><PencilIcon size="size-5" /></button>
            </DialogTrigger>
            <form onSubmit={handleSubmit}>
              <DialogContent className="sm:max-w-[425px] max-w-5xl! p-0 pt-12 rounded-sm">
                  <div className="flex flex-col gap-8 px-4 max-h-[80vh] overflow-auto scrollbar mt-1 tn:px-10">

                      <h1 className="w-full border-b-1 px-11 py-3 border-black text-center font-bold text-xl absolute top-0 left-1/2 transform -translate-x-1/2">{meal.title}</h1>

                      <div className="flex flex-col gap-4 pt-2">
                          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-2 gap-12">
                              <div className="flex flex-col gap-7">
                                  <div className="relative custom-shadow rounded-lg">
                                      <input type="file" id="meal-image-upload" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e)} />
                                      <label htmlFor="meal-image-upload" className="cursor-pointer" >
                                          <img className="w-full rounded-lg" alt="meal" src={ data.meal_img instanceof File ? URL.createObjectURL(data.meal_img) : meal.meal_img ? `/storage/meals/Meal${meal.idMeal}.${meal.meal_img.split('.').pop()}` : BlankMeal}  />
                                          <div className="absolute right-0 top-0 p-1 bg-30 text-black rounded-bl-lg rounded-tr-lg shadow-[-5px_5px_10px_hsla(0,0%,0%,0.2)]"><EditIcon /></div>
                                      </label>
                                  </div>
                                  <div className="flex flex-col gap-4">
                                      <span className="flexy gap-4"><TextInputGroup label="Title: " name="title" id="title" placeholder="" classLabel="font-bold" onChange={handleChange} value={data.title}/></span>
                                      <span>                        <TextAreaGroup  label="Description: " classLabel="font-bold" name="description" id="description" placeholder="Description..." rows="4" onChange={handleChange} value={data.description} /> </span>
                                  </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                  <span className="flex flex-col gap-0.5"> <TextInputGroup label="Category: " name="category" id="category" placeholder="" classLabel="font-bold" onChange={handleChange} value={data.category} /> </span>
                                  <span className="flex flex-col gap-0.5"> <TextInputGroup label="Kitchen: " name="kitchen" id="kitchen" placeholder="" classLabel="font-bold" onChange={handleChange} value={data.kitchen} /> </span>
                                  <span className="flex flex-col gap-0.5"> <TextInputGroup type="time" label="Duration: " name="duration" id="duration" placeholder="" classLabel="font-bold" onChange={handleChange} value={data.duration} /></span>
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
                              <button className="Backbutton py-0.5! pr-4! pl-0!"><b><ChevronLeft className="size-8" /></b><b>Discard</b></button>
                              <button className="Nextbutton gap-2 py-1.5! px-2! pl-4!"><b>Save</b><CheckIcon size="size-6" /></button>
                          </div>
                      </div>
                  </div>
              </DialogContent>
            </form>
        </Dialog>
    );
}
