import React from "react";
import Profile from "@/../../public/images/Profile.png";
import { TrashIcon } from "@/../../public/icons/Icons";
import { SendIcon } from "@/../../public/icons/Icons";
import { MessagesIcon } from "@/../../public/icons/Icons";

export const UserMessages = () => {
  const Users = [
    {
      id: 1,
      img: Profile,
      fname: "Imrane",
      lname: "Mejouate",
      phone: "0691567418",
      email: "Mejouate.imrane@gmail.com",
      message:
        "Description Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 2,
      img: Profile,
      fname: "Mouad",
      lname: "Echehaibi",
      phone: "0693841593",
      email: "professormouad@gmail.com",
      message:
        "Description Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      img: Profile,
      fname: "Mohamed",
      lname: "Maimoune",
      phone: "0693656626",
      email: "mohamadmaimoune1@gmail.com",
      message:
        "Description Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      img: Profile,
      fname: "Mohamed",
      lname: "Maimoune",
      phone: "0693656626",
      email: "mohamadmaimoune1@gmail.com",
      message:
        "Description Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      img: Profile,
      fname: "Mohamed",
      lname: "Maimoune",
      phone: "0693656626",
      email: "mohamadmaimoune1@gmail.com",
      message:
        "Description Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  return (
    <div className="mt-4 max-md:mb-20 overflow-hidden">
      <div className="TopManageDashboard max-sm:px-0!">
        <MessagesIcon style="size-7 text-gray-500" />
        <h1 className="text-lg text-gray-500">Users Messages</h1>
      </div>
      <div className="sm:m-3 border-t-1 border-gray-400 h-auto max-h-[80vh] overflow-auto scrollbar">
        <div className="flex flex-col">
          {Users.map((user) => (
            <div key={user.id}>
              <div className="border-b-1 border-gray-400 py-2 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-[5fr_0.5fr] gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.img}
                        className="rounded-full h-auto w-20"
                        alt={`user.fname user.lname`}
                      />
                      <h1 className="font-bold text-lg">
                        {user.fname} {user.lname}
                      </h1>
                    </div>
                    <table className="mx-1!">
                      <tbody>
                        <tr>
                          <td>
                            <b className="text-[15px]">Phone: </b>
                          </td>
                          <td>
                            <p className="text-[15px]">{user.phone}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b className="text-[15px]">email: </b>
                          </td>
                          <td>
                            <p className="text-[15px]">{user.email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b className="text-[15px]">message: </b>
                          </td>
                          <td>
                            <p className="text-[15px]">{user.message}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flexy sm:flex-col gap-4">
                    <span className="bg-black rounded-full p-1.5">
                      <SendIcon style="flexy size-4 fill-white" />
                    </span>
                    <span className="flexy">
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
  );
};
