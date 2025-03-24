import { FilterIcon } from "@/../../public/icons/Icons";
import React from "react";
import TextInputGroup from "@/components/ui/TextInputGroup";
import Profile from "@/../../public/images/Profile.png";
import { UpdateProfile } from "@/components/models/UpdateProfile";
import { TrashIcon } from "@/../../public/icons/Icons";
import { EditIcon } from "@/../../public/icons/Icons";
import { UserIcon } from "@/../../public/icons/Icons";

export const UserAccounts = () => {
  const Users = [
    {id: 1,img: Profile,fname: "Mohamed",lname: "Maimoune",email: "mohamadmaimoune1@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 2,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 3,img: Profile,fname: "Mouad",lname: "Echehaibi",email: "professor.mouad@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 4,img: Profile,fname: "Mohamed",lname: "Maimoune",email: "mohamadmaimoune1@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 5,img: Profile,fname: "Imrane",lname: "Mejouate",email: "mejouate.imrane@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
    {id: 6,img: Profile,fname: "Mouad",lname: "Echehaibi",email: "professor.mouad@gmail.com",bio: "Description Ipsum is simply dummy text of the printing and typesetting industry.",},
  ];
  return (
    <div className="mt-4 max-md:mb-20 overflow-hidden">
      <div className="TopManageDashboard max-sm:px-0!">
        <UserIcon style="size-7 fill-gray-400 text-gray-400" />
        <h1 className="text-lg text-gray-500">Users Accounts</h1>
      </div>
      <div className="sm:m-3 rounded-sm ">
        <div className="flex relative">
          <span className="bg-white! flexy absolute left-0">
            <FilterIcon style="size-7.5 text-gray-400" />
          </span>
          <TextInputGroup
            placeholder="Filter"
            className="bg-white! border-0! rounded-none! py-1 pl-10! pr-20! border-b-1! border-gray-400! focus:ring-0! focus:border-b-1!"
          />
          <button className="button absolute right-2 top-1 rounded-full! py-1.5! px-7!">
            Filter
          </button>
        </div>
        <div className="h-auto max-h-[75vh] scrollbar overflow-auto pb-10 max-md:pb-0!">
          <div className="flex flex-col">
            {Users.map((user) => (
              <div key={user.id}>
                <div className="border-b-1 border-gray-400 py-4 px-2">
                  <div className="grid gap-0 sm:grid-cols-[5fr_0.5fr] max-lg:grid-cols-[1fr]!">
                    <div className="flex gap-8 max-sm:gap-2 max-sm:items-center max-sm:flex-col">
                      <div className="w-20">
                        <img
                          src={user.img}
                          className="rounded-full w-full"
                          alt={`user.fname user.lname`}
                        />
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <td colSpan="2">
                              <h1 className="font-bold text-xl">
                                {user.fname} {user.lname}
                              </h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>email: </b>
                            </td>
                            <td>
                              <p>{user.email}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>bio: </b>
                            </td>
                            <td>
                              <p>{user.bio}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flexy sm:flex-col gap-2 max-lg:flex-row!">
                      <span className="flex justify-center">
                        <button className="bg-gray-400 text-white py-1 px-6 rounded-full">
                          Details
                        </button>
                      </span>
                      <span className="flexy">
                        <UpdateProfile
                          buttonContent={
                            <EditIcon style="text-blue-600 size-7" />
                          }
                          buttonClassName="shadow-none! bg-transparent! hover:bg-transparent!"
                        />
                        <span className="text-red-600">
                          <TrashIcon size="size-7" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
