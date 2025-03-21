import React from "react";
import Tajine from "@/../../public/images/Tajine.jpg";
import Profile from "@/../../public/images/Profile.png";
import TextInputGroup from "@/components/ui/TextInputGroup";
import {
  DislikeIcon,
  DotsIcon,
  HeartIcon,
  LikeIcon,
  RepportIcon,
} from "@/../../public/icons/Icons";
const Ingredients = [
  "Chicken (1 whole, cut into pieces)",
  "2 onions (finely chopped)",
  "3 cloves garlic (minced)",
  "1/4 cup fresh cilantro and parsley (chopped)",
  "1 preserved lemon (quartered)",
  "1/2 cup green olives",
  "1 tsp ground turmeric",
];
const Instructions = [
  "Marinate the chicken with garlic, ginger, turmeric, paprika, cumin, salt, pepper, and olive oil. Let it rest ",
  "Sauté onions in a tagine or deep pan with a bit of olive oil until soft .",
  "Add the marinated chicken and cook on medium heat for 5 minutes, turning occasionally.",
];

export const MealDetails = () => {
  return (
    <div className="tn:max-w-[28rem] lg:max-w-[52rem] md:max-w-[40rem] sm:max-w-[35rem] max-w-[22rem] m-auto mb-40">
      <div>
        <img
          src={Tajine}
          className="w-full max-h-[60vh] rounded-3xl"
          alt="test"
        />
        <div className="max-w-3xl m-auto">
          <h1 className="text-2xl font-bold py-3.5">
            Traditional Moroccan Chicken Tagine
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flexy gap-4">
                <img src={Profile} alt="test" className="rounded-full w-12" />
                <h3 className="font-bold text-sm sm:text-lg">Fatima El Fassi</h3>
              </div>
            </div>
            <div className="flexy gap-2">
              <span className="rounded-full border-1 border-black flexy gap-2 px-2 py-1">
                <span className="flexy">
                  <LikeIcon size="size-5.5" />
                  <b className="text-sm">10k</b>
                </span>
                <span className="h-6.5 w-px bg-black rounded-full"></span>
                <DislikeIcon size="size-5.5" />
              </span>
              <span className="border-1 border-black rounded-full p-1.5">
                <HeartIcon size="size-5.5" />
              </span>
              <span className="border-1 border-black rounded-full p-1.5">
                <RepportIcon size="size-5" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-30 p-4.5 py-3.5 my-4 rounded-lg custom-shadow">
            <div>
              <p className="text-sm">215k views • 3 days ago</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="soft-bg bg-[var(--bg-10)]! text-first font-bold">
                Salad
              </span>
              <span className="soft-bg bg-[var(--bg-10)]! text-first font-bold">
                Morocco
              </span>
            </div>
            <div>
              <h3 className="font-bold tracking-wide text-[var(--bg-10)]">
                Description :
              </h3>
              <p className="text-[15px] text-justify pt-1">
                This Moroccan Chicken Tagine with Preserved Lemons and Olives is
                a flavorful and aromatic dish cooked slowly to perfection. It
                combines tender chicken with a blend of traditional Moroccan
                spices, giving it a rich and savory taste
              </p>
            </div>
            <div>
              <h3 className="font-bold tracking-wide text-[var(--bg-10)]">
                Ingredients :
              </h3>
              <div className="flex flex-wrap gap-2 pt-2 px-2">
                {Ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="soft-bg w-auto! py-1! px-4! text-[15px]!"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold tracking-wide pb-2 text-[var(--bg-10)]">
                Instructions :
              </h3>
              <div className="bg-[var(--soft-bg)] rounded-lg py-4 px-1">
                <ul className="flex flex-col gap-2 relative px-3">
                  <span className="bg-10 absolute h-full w-0.5 left-4 top-2"></span>
                  {Instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex items-center relative before:absolute before:left-0 before:h-2.5 before:w-2.5 before:bg-[var(--bg-10)] before:rounded-full"
                    >
                      <span className="ml-2 pl-4 text-[15px]">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4 px-2 flex flex-col gap-3">
            <h1 className="text-2xl flex gap-2">
              <b>0</b>
              <strong cl>Comments</strong>
            </h1>
            <div className="flex gap-2 relative">
              <span className="flexy">
                <img src={Profile} alt="test" className="rounded-full w-10" />
              </span>
              <TextInputGroup
                name="comment"
                id="comment"
                placeholder="Add a comment..."
                className="border-0! border-b-2! rounded-none! focus:ring-0! pr-25!"
              />
              <button className="absolute right-0 bg-10 text-first font-bold py-1.5 px-3 text-sm rounded-lg c-p">
                Comment
              </button>
            </div>
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center gap-4 max-w-[800rem] m-auto">
                <span className="flexy">
                  <img src={Profile} alt="test" className="rounded-full w-10" />
                </span>
                <span className="relative w-full max-w-[39rem]">
                  <p className="w-full border-b-2 border-[var(--third)] absolute bottom-0"></p>
                  <span className="flex justify-between items-center">
                    <span>
                      <h3 className="text-[15px] font-bold">User Name</h3>
                      <p className="text-[14px] mb-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting more... Lorem Ipsum is simply dummy text of
                        the printing and typesetting more...
                      </p>
                    </span>
                    <span className="c-p text-[var(--bg-10)]">
                      <DotsIcon />
                    </span>
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-4 max-w-[800rem] m-auto">
                <span className="flexy">
                  <img src={Profile} alt="test" className="rounded-full w-10" />
                </span>
                <span className="relative w-full max-w-[39rem]">
                  <p className="w-full border-b-2 border-[var(--third)] absolute bottom-0"></p>
                  <span className="flex justify-between items-center">
                    <span>
                      <h3 className="text-[15px] font-bold">User Name</h3>
                      <p className="text-[14px] mb-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting more... Lorem Ipsum is simply dummy text of
                        the printing and typesetting more...
                      </p>
                    </span>
                    <span className="c-p text-[var(--bg-10)]">
                      <DotsIcon />
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
