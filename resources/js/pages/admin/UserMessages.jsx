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
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Profile from "@/../../public/images/Profile.png";
import { FilterIcon, TrashIcon } from "@/../../public/icons/Icons";
import { SendIcon } from "@/../../public/icons/Icons";
import { MessagesIcon } from "@/../../public/icons/Icons";
import { Phone } from "lucide-react";
import { router } from "@inertiajs/react";
import TextInputGroup from "@/components/ui/TextInputGroup";

export const UserMessages = ({ usersMessages }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredMessages = usersMessages.filter((message) =>
        message.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleDelete = (idMessage) => {
        router.delete(`/admin/messages/${idMessage}`, {
            onSuccess: () => {
                toast.success(`deleted successfully`, {
                    duration: 2000,
                });
            },
        });
    };
    return (
        <div className="mt-4 max-md:mb-20 overflow-hidden">
            <div className="TopManageDashboard max-sm:px-0!">
                <MessagesIcon style="size-7 text-gray-500" />
                <h1 className="text-lg text-gray-500">Users Messages</h1>
            </div>
            <div className="flex relative">
                <span className="bg-white! flexy absolute left-0">
                    <FilterIcon style="size-7.5 text-gray-400" />
                </span>
                <TextInputGroup
                    placeholder="Filter by message content"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white! border-0! rounded-none! py-1 pl-10! pr-20! border-b-1! border-gray-400! focus:ring-0! focus:border-b-1!"
                />
                {/* <button className="button absolute right-2 top-1 rounded-full! py-1.5! px-7!">
                                    Filter
                                </button> */}
            </div>
            <div className=" border-gray-400 h-auto pb-6 max-h-[80vh] overflow-auto scrollbar">
                <div className="flex flex-col">
                    {filteredMessages.length > 0 ? (
                        filteredMessages.map((message) => (
                            <div key={message.id}>
                                <div className="border-b-1 border-gray-400 py-2 sm:px-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="flex gap-4">
                                            <table className="mx-1! w-full">
                                                <tbody>
                                                    <div className="grid grid-cols-[2fr_0.5fr]">
                                                        <span className="flex items-center gap-4">
                                                            <div className="flex flex-col items-center gap-4">
                                                                <img
                                                                    src={
                                                                        message.profile_img
                                                                            ? `/uploads/users/${message.profile_img}`
                                                                            : Profile
                                                                    }
                                                                    className="rounded-full h-auto w-20"
                                                                    alt={`${message.firstName} ${message.lastName}`}
                                                                />
                                                            </div>
                                                            <div>
                                                                <tr>
                                                                    <td>
                                                                        <b className="text-[15px]">
                                                                            From:{" "}
                                                                        </b>
                                                                    </td>
                                                                    <td>
                                                                        <h1 className="font-bold text-base">
                                                                            {
                                                                                message.firstName
                                                                            }{" "}
                                                                            {
                                                                                message.lastName
                                                                            }
                                                                        </h1>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="w-24">
                                                                        <b className="text-[15px]">
                                                                            Phone:{" "}
                                                                        </b>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-[15px]">
                                                                            {message.phone ||
                                                                                "N/A"}
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <b className="text-[15px]">
                                                                            Email:{" "}
                                                                        </b>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-[15px]">
                                                                            {
                                                                                message.email
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <b className="text-[15px]">
                                                                            Date:{" "}
                                                                        </b>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-[15px]">
                                                                            {
                                                                                message.created_at
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </div>
                                                        </span>
                                                        <div className="flexy sm:flex-col gap-2">
                                                            <div className="flexy gap-2">
                                                                <a
                                                                    href={`mailto:${message.email}`}
                                                                    className="bg-black rounded-full p-1.5 text-white text-sm font-bold"
                                                                >
                                                                    <SendIcon style="flexy size-4.5 fill-white" />
                                                                </a>
                                                                <a
                                                                    href={`tel: ${
                                                                        message.phone ||
                                                                        "N/A"
                                                                    }`}
                                                                    className="flexy gap-2 text-sm text-white"
                                                                >
                                                                    <span className="bg-black rounded-full p-1.5">
                                                                        <Phone className="size-4.5 fill-white text-white" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <Drawer>
                                                                <DrawerTrigger className="flexy gap-1 bg-red-600 rounded-md py-1.5 w-28 cursor-pointer">
                                                                    <b className="text-white text-sm">
                                                                        Remove
                                                                    </b>
                                                                    <TrashIcon size="size-5 text-white!" />
                                                                </DrawerTrigger>
                                                                <DrawerContent>
                                                                    <DrawerHeader>
                                                                        <DrawerTitle>
                                                                            Are
                                                                            you
                                                                            absolutely
                                                                            sure?
                                                                        </DrawerTitle>
                                                                        <DrawerDescription>
                                                                            This
                                                                            action
                                                                            cannot
                                                                            be
                                                                            undone.
                                                                        </DrawerDescription>
                                                                    </DrawerHeader>
                                                                    <DrawerFooter className="flex-row!">
                                                                        <DrawerClose>
                                                                            <Button
                                                                                variant="outline"
                                                                                className="cursor-pointer"
                                                                            >
                                                                                Cancel
                                                                            </Button>
                                                                        </DrawerClose>
                                                                        <DrawerClose
                                                                            onClick={() =>
                                                                                handleDelete(
                                                                                    message.idMessage
                                                                                )
                                                                            }
                                                                            className="cursor-pointer px-4 py-0! rounded-md bg-red-600 hover:bg-red-700"
                                                                        >
                                                                            <b className="text-sm text-white whitespace-nowrap">
                                                                                Delete
                                                                            </b>
                                                                        </DrawerClose>
                                                                    </DrawerFooter>
                                                                </DrawerContent>
                                                            </Drawer>
                                                        </div>
                                                    </div>
                                                    <tr>
                                                        <td colspan="2">
                                                            <fieldset className="border-1 border-gray-400 rounded-r-sm rounded-bl-sm">
                                                                <legend className="p-1 text-[15px] font-bold text-sm">
                                                                    Message
                                                                </legend>
                                                                <p className="text-[15px] p-1">
                                                                    {
                                                                        message.content
                                                                    }
                                                                </p>
                                                            </fieldset>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-4 text-gray-500">
                            No messages found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
