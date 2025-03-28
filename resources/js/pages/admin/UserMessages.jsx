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
import React from "react";
import Profile from "@/../../public/images/Profile.png";
import { TrashIcon } from "@/../../public/icons/Icons";
import { SendIcon } from "@/../../public/icons/Icons";
import { MessagesIcon } from "@/../../public/icons/Icons";
import { Phone } from "lucide-react";
import { router } from "@inertiajs/react";

export const UserMessages = ({ usersMessages }) => {
    const handleDelete = (idMessage) => {
        router.delete(`/admin/messages/${idMessage}`, {
            onSuccess: () => {
                console.log("Message deleted successfully");
            },
        });
    };
    return (
        <div className="mt-4 max-md:mb-20 overflow-hidden">
            <div className="TopManageDashboard max-sm:px-0!">
                <MessagesIcon style="size-7 text-gray-500" />
                <h1 className="text-lg text-gray-500">Users Messages</h1>
            </div>
            <div className="sm:m-3 border-t-1 border-gray-400 h-auto pb-6 max-h-[80vh] overflow-auto scrollbar">
                <div className="flex flex-col">
                    {usersMessages.map((message) => (
                        <div key={message.id}>
                            <div className="border-b-1 border-gray-400 py-2 sm:px-6">
                                <div className="grid grid-cols-1 sm:grid-cols-[5fr_0.5fr] gap-6">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={
                                                    message.profile_img
                                                        ? `/uploads/users/${message.profile_img}`
                                                        : Profile
                                                }
                                                className="rounded-full h-auto w-20"
                                                alt={`${message.firstName} ${message.lastName}`}
                                            />
                                            <h1 className="font-bold text-lg">
                                                {message.firstName}{" "}
                                                {message.lastName}
                                            </h1>
                                        </div>
                                        <table className="mx-1!">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="text-[15px]">
                                                            Message:{" "}
                                                        </b>
                                                    </td>
                                                    <td>
                                                        <p className="text-[15px]">
                                                            {message.content}
                                                        </p>
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
                                                            {message.email}
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
                                                            {message.created_at}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flexy sm:flex-col gap-2">
                                        <div className="flexy gap-2 py-1.5 w-36 bg-green-600 rounded-md cursor-pointer">
                                            <a
                                                href={`mailto:${message.email}`}
                                                className="text-white text-sm font-bold"
                                            >
                                                Email
                                            </a>
                                            <span className="bg-black rounded-full p-1">
                                                <SendIcon style="flexy size-3 fill-white" />
                                            </span>
                                        </div>
                                        <div className="bg-green-600 flexy w-36 rounded-md py-1.5">
                                            <a
                                                href={`tel: ${
                                                    message.phone || "N/A"
                                                }`}
                                                className="flexy gap-2 text-sm text-white"
                                            >
                                                <b>Call</b>
                                                <span className="bg-black rounded-full p-1">
                                                    <Phone className="size-3 fill-white text-white" />
                                                </span>
                                            </a>
                                        </div>
                                        <Drawer>
                                            <DrawerTrigger className="flexy gap-1 bg-red-600 rounded-md py-1.5 w-36 cursor-pointer">
                                                <b className="text-white text-sm">
                                                    Remove
                                                </b>
                                                <TrashIcon size="size-5 text-white!" />
                                            </DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader>
                                                    <DrawerTitle>
                                                        Are you absolutely sure?
                                                    </DrawerTitle>
                                                    <DrawerDescription>
                                                        This action cannot be
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
