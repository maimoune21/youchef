import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FilterIcon, UserIcon } from "@/../../public/icons/Icons";
import React from "react";
import TextInputGroup from "@/components/ui/TextInputGroup";
import { UpdateProfile } from "@/components/models/UpdateProfile";
import { CircleChevronRight, Trash2Icon } from "lucide-react";

export const UserAccounts = ({ users }) => {
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
                        {users.map((user) => (
                            <div key={user.id}>
                                <div className="border-b-1 border-gray-400 py-4 px-2">
                                    <div className="grid gap-0 sm:grid-cols-[5fr_0.5fr] max-lg:grid-cols-[1fr]!">
                                        <div className="flex gap-8 max-sm:gap-2 max-sm:items-center max-sm:flex-col">
                                            <div className="w-20">
                                                {user.profile_img ? (
                                                    <img
                                                        src={`/uploads/users/${user.profile_img}`}
                                                        className="rounded-full w-full"
                                                        alt={`${user.firstName} ${user.lastName}`}
                                                    />
                                                ) : (
                                                    <span className="bg-soft text-black max-md:m-auto font-bold text-3xl h-full aspect-square rounded-full flexy">
                                                        {user.lastName.charAt(
                                                            0
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="2">
                                                            <h1 className="font-bold text-xl">
                                                                {user.firstName}{" "}
                                                                {user.lastName}
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
                                                            <p>
                                                                {user.bio ||
                                                                    "No bio provided"}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flexy flex-row gap-2">
                                            <span className="flexy gap-1.5 bg-gray-300 px-4 py-1.5 rounded-md cursor-pointer">
                                                <b className="text-white text-sm">
                                                    View
                                                </b>
                                                <CircleChevronRight className="size-5 text-white" />
                                            </span>
                                            <div className='flex flex-col gap-2'>
                                                <span className="flexy">
                                                    <UpdateProfile
                                                        buttonContent="Edit"
                                                        buttonClassName="h-auto! px-5! py-1.5!"
                                                        user={user}
                                                    />
                                                </span>
                                                <Drawer>
                                                    <DrawerTrigger className="flexy gap-1 bg-red-600 rounded-md px-1.5 py-1.5 cursor-pointer">
                                                        <b className="text-sm text-white">
                                                            Remove
                                                        </b>
                                                        <Trash2Icon className="text-white size-4.5" />
                                                    </DrawerTrigger>
                                                    <DrawerContent>
                                                        <DrawerHeader>
                                                            <DrawerTitle>
                                                                Are you
                                                                absolutely sure?
                                                            </DrawerTitle>
                                                            <DrawerDescription>
                                                                This action
                                                                cannot be
                                                                undone.
                                                            </DrawerDescription>
                                                        </DrawerHeader>
                                                        <DrawerFooter className="flex-row!">
                                                            <Button className="cursor-pointer bg-red-600 hover:bg-red-800">
                                                                Delete
                                                            </Button>
                                                            <DrawerClose>
                                                                <Button
                                                                    variant="outline"
                                                                    className="cursor-pointer"
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </DrawerClose>
                                                        </DrawerFooter>
                                                    </DrawerContent>
                                                </Drawer>
                                            </div>
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
