import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InfoIcon } from "lucide-react";

export function MealRepports() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="button rounded-full! text-black!  bg-red-600! flexy gap-2">
          <b className="text-white">Reports: </b>
          <span className="flexy gap-1">
            <b className="text-black">100</b>
            <InfoIcon />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-2xl! p-4 py-12  rounded-sm">
        <div className="flex flex-col gap-8">
          <h1 className="w-full border-b-1 px-11 py-3 border-black text-center font-bold text-xl absolute top-0 left-1/2 transform -translate-x-1/2">
            Traditional Moroccan Chicken Tagine
          </h1>
          <div className="max-tn:mt-12 mt-6 flex justify-between">
            <span className="rounded-full! text-black!  bg-red-600! flexy gap-2 py-1 px-4">
              <b className="text-white">Reports: </b>
              <span className="flexy gap-1">
                <b className="text-black">100</b>
              </span>
            </span>
            <button className="text-red-600 font-bold cursor-pointer">Clear All</button>
          </div>
          <div className="m-auto max-w-lg text-center">
            <ul className="flex flex-col gap-2">
                <li className="w-full bg-[var(--soft-bg)] py-2 px-4 rounded-lg">Ana ma3jbatnich had lmakla mal7a bzaf</li>
                <li className="w-full bg-[var(--soft-bg)] py-2 px-4 rounded-lg">Ana ma3jbatnich had lmakla mal7a bzaf</li>
                <li className="w-full bg-[var(--soft-bg)] py-2 px-4 rounded-lg">Ana ma3jbatnich had lmakla mal7a bzaf</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
