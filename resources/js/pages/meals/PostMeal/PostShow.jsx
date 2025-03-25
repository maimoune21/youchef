import React from "react";
import { motion } from "framer-motion";

import TextInputGroup from "@/components/ui/TextInputGroup";

import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { CheckIcon } from "/public/icons/Icons";
import { StepBack } from "lucide-react";

const PostShow = ({ animationProps, prevStep, data, PostMeal, isSubmitting}) => {
  return (
    <motion.div
      {...animationProps}
      key="step-4"
      className="relative flex flex-col  gap-4 justify-between px-[4%] py-[4%] h-full"
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-9 justify-between">
        <div className="flex flex-col gap-2">
          {data.meal_img ? (
            <img
              src={URL.createObjectURL(data.meal_img)}
              alt="hello"
              className="w-full h-[150px] rounded-3xl object-cover"
            />
          ) : (
            <div
              className="flexy font-bold text-2xl w-full h-[150px] rounded-xl"
              style={{
                backgroundImage: ` linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
                backgroundSize: "20px 20px",
              }}
            >
              No Image Added
            </div>
          )}

          <TextInputGroup label="Title" value={data.title} />
          <TextAreaGroup readOnly={true}
            label="Description"
            value={data.description}
            rows="2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <TextInputGroup label="Categorie" value={data.idCategory} />
          <TextInputGroup label="kitchen" value={data.idKitchen} />
          <TextInputGroup label="Duration" value={data.duration} />
          {data.ingredients[0] ? (
            <TextAreaGroup
              readOnly
              label="Ingredients"
              rows={Math.min(data.ingredients.filter(i => i.trim()).length, 5)}
              value={data.ingredients
                .filter(item => item.trim())
                .map((item, i) => `${i + 1}. ${item}`)
                .join("\n")}
            />
          ) : (
            <TextAreaGroup
              readOnly
              label="Ingredients"
              rows={1}
              className="text-third"
              value="-- no ingredients --"
            />
          )}
          {data.instructions[0] ? (
            <TextAreaGroup
              readOnly={true}
              label="Instructions"
              rows={Math.min(data.instructions.length, 5)}
              value={data.instructions
                .filter(instruction => instruction.trim()) 
                .map((item, i) => `${i + 1}. ${item}`)
                .join("\n")}
            />
          ) : (
            <TextAreaGroup
              readOnly={true}
              label="Instructions"
              rows={1} 
              className="text-third"
              value="-- no instructions --"
            />
          )}
        </div>
        <div></div>
        <div className="flex justify-end gap-1.5">
          <button className="Backbutton gap-1" onClick={prevStep}>
            <StepBack size="18" />
            Back
          </button>
          <button
            className="Nextbutton gap-1"
            onClick={PostMeal}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post'} <CheckIcon size="size-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostShow;
