import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  CheckIcon,
  EditIcon,
  LeftArrowIcon,
  PencilIcon,
} from "../../../../public/icons/Icons";
import BlankMeal from "../../../../public/images/BlankMeal.png";
import TextInputGroup from "../ui/TextInputGroup";
import TextAreaGroup from "../ui/TextAreaGroup";

export function UpdateMeal({ buttonStyles = "", meal}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`button rounded-full! flex gap-2 py-2! ${buttonStyles}`}
        >
          <b>Update</b>
          <PencilIcon size="size-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-5xl! p-0 pt-12 rounded-sm">
        <div className="flex flex-col gap-8 px-4 max-h-[80vh] overflow-auto scrollbar mt-1 tn:px-10">
          <span>
            <h1 className="w-full border-b-1 px-11 py-3 border-black text-center font-bold text-xl absolute top-0 left-1/2 transform -translate-x-1/2">
              Update {meal.title}
            </h1>
          </span>
          <div className="flex flex-col gap-4 pt-2">
            <form className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-2 gap-12">
              <div className="flex flex-col gap-7">
                <div className="relative custom-shadow rounded-lg">
                  <span className="absolute right-0 top-0 p-1 bg-30 text-black rounded-bl-lg rounded-tr-lg cursor-pointer shadow-[-5px_5px_10px_hsla(0,0%,0%,0.2)]">
                    <EditIcon />
                  </span>
                  <img src={meal.meal_img || BlankMeal} className="w-full rounded-lg" alt="test" />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flexy gap-4">
                    <TextInputGroup
                      label="Title: "
                      name="title"
                      id="title"
                      placeholder="Mahalabya with sosage in na9ani9"
                      classLabel="font-bold"
                      value={meal.title}
                    />
                  </span>
                  <span>
                    <TextAreaGroup
                      label="Description: "
                      classLabel="font-bold"
                      name="description"
                      id="description"
                      placeholder="Description..."
                      rows="4"
                      value={meal.description}
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex flex-col gap-0.5">
                  <TextInputGroup
                    label="Category: "
                    name="title"
                    id="title"
                    placeholder="Mahalabya with sosage in na9ani9"
                    classLabel="font-bold"
                    value={meal.idCategory}
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <TextInputGroup
                    label="Kitchen: "
                    name="title"
                    id="title"
                    placeholder="Mahalabya with sosage in na9ani9"
                    classLabel="font-bold"
                    value={meal.idKitchen}
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <TextInputGroup
                    label="Duration: "
                    name="title"
                    id="title"
                    placeholder="Mahalabya with sosage in na9ani9"
                    classLabel="font-bold"
                    value={meal.duration}
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <TextAreaGroup
                    label="Ingredients: "
                    classLabel="font-bold"
                    name="description"
                    id="description"
                    placeholder="Ingredient 1"
                    rows="4"
                    value={meal.ingredients}
                  />
                </span>
                <span className="flex flex-col gap-0.5">
                  <TextAreaGroup
                    label="Instructions: "
                    classLabel="font-bold"
                    name="description"
                    id="description"
                    placeholder="Instruction 1"
                    rows="4"
                    value={meal.instructions}
                  />
                </span>
              </div>
            </form>
            <div className="flexy gap-6 pb-8">
              <button className="Backbutton py-0.5! pr-4! pl-0!">
                <LeftArrowIcon size="size-8" />
                <b>Discard</b>
              </button>
              <button className="Nextbutton gap-2 py-1.5! px-2! pl-4!">
                <b>Save</b>
                <CheckIcon size="size-6" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
