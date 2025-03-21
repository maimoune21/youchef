import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Profile from "@/../../public/images/Profile.png";
import TextInputGroup from "@/components/ui/TextInputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { PencilIcon } from "@/../../public/icons/Icons";

export function UpdateProfile({
  buttonContent = "Edit Profile",
  buttonClassName = "",
  ...props
}) {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    bio: "",
    email: "",
    password: "",
  });

  const HData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`bg-10 font-bold cursor-pointer ${buttonClassName} hover:bg-green-600! transition duration-200`}
          {...props}
        >
          {buttonContent}
          <PencilIcon size="size-4"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-2xl! p-0 pt-12 rounded-sm">
        <div className="overflow-auto scrollbar max-h-[80vh]">
          <div className="bg-[var(--banner)] w-full text-center py-3">
            <b className="text-xl">
              Update <b className="text-[var(--bg-10)]">Profile</b>
            </b>
          </div>
          <p className="text-center max-w-sm m-auto py-6">
            Add your personal information as you would like it to appear in your
            profile.
          </p>
          <div className="px-10 flex flex-col gap-2">
            <h3 className="text-base font-bold">Profile Picture</h3>
            <div className="max-tn:flex-col flexy gap-12">
              <img src={Profile} className="w-32 rounded-full" alt="test" />
              <span className="flex flex-col gap-2">
                <button className="button">Change Picture</button>
                <button className="button">Remove Picture</button>
              </span>
            </div>
            <div>
              <form className="gird place-items-center py-4">
                <table className="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                  <tbody>
                    <tr>
                      <td>
                        <TextInputGroup
                          label="First Name"
                          id="fname"
                          name="fname"
                          placeholder="Your First Name Here..."
                          value={data.fname}
                          onChange={HData}
                          classLabel="font-bold text-sm"
                        />
                      </td>
                      <td>
                        <TextInputGroup
                          label="Last Name"
                          id="lname"
                          name="lname"
                          placeholder="Your Last Name Here..."
                          value={data.lname}
                          onChange={HData}
                          classLabel="font-bold text-sm"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <TextAreaGroup
                          label="Bio"
                          id="message"
                          name="message"
                          placeholder="Your Message Here..."
                          value={data.message}
                          onChange={HData}
                          classLabel="font-bold text-sm"
                          rows="6"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <TextInputGroup
                          label="Email"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email Here..."
                          value={data.email}
                          onChange={HData}
                          classLabel="font-bold text-sm"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <TextInputGroup
                          label="Password"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Your Password Here..."
                          value={data.password}
                          onChange={HData}
                          classLabel="font-bold text-sm"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="w-full text-center">
                        <button
                          type="submit"
                          className="button py-2! mt-4! text-base! w-52!"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
