import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RepportIcon } from "@/../../public/icons/Icons";
import { useState } from "react";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { Flag } from "lucide-react";

export function ReportMeal({meal}) {
  const [data, setData] = useState({
    repport: "",
  });

  const HData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="border-1 border-black rounded-full p-[6.3px] c-p cursor-pointer">
          <Flag />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-2xl! p-4 pt-12  rounded-sm">
        <div className="flex flex-col gap-8 px-10">
          <span>
            <h1 className="w-full border-b-1 px-11 py-3 border-black text-center font-bold text-xl absolute top-0 left-1/2 transform -translate-x-1/2">
              {meal}
            </h1>
          </span>
          <form className="pt-4">
            <TextAreaGroup
              label="Enter Your Repport Contant"
              id="message"
              name="message"
              placeholder="Your reason to repport....."
              value={data.message}
              onChange={HData}
              classLabel="font-bold text-base"
              className="my-2 focus:border-red-600! focus:ring-0!"
              rows="6"
            />
            <button className="button bg-red-500! text-black! float-right">
              Repport
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
