import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TextInputGroup from "@/components/ui/TextInputGroup";
import TextAreaGroup from "@/components/ui/TextAreaGroup";
import { PencilIcon, TrashIcon } from "@/../../public/icons/Icons";
import { router, useForm, usePage } from "@inertiajs/react";
import { toast } from "sonner";

export function UpdateProfile({
    user,
    buttonContent = "Edit Profile",
    buttonClassName = "",
    isAdmin = false,
    ...props
}) {
    const { errors } = usePage().props;
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(
        user.profile_img ? `/uploads/users/${user.profile_img}?t=${Date.now()}` : null
    );

    const { data, setData, post, processing, reset } = useForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        profile_img: null,
        bio: user.bio || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("profile_img", file);
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        if (confirm("Are you sure you want to delete your profile image?")) {
            setData("profile_img", null);
            setSelectedImage(null);
            setImagePreview(null);

            const deleteUrl = isAdmin
                ? `/admin/users/${user.idUser}/image-delete`
                : "/profile/image-delete";

            router.delete(deleteUrl, {
                onSuccess: () => {
                    toast.success("Profile image deleted");
                    setData((prev) => ({ ...prev, profile_img: null }));
                },
                onError: () => toast.error("Failed to delete image"),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.password && data.password !== data.password_confirmation) {
            toast.error("Passwords do not match");
            return;
        }

        const updateUrl = isAdmin
            ? `/admin/users/${user.idUser}`
            : "/profileUpdate";

        post(updateUrl, {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                toast.success("Profile updated successfully");
                reset("password", "password_confirmation");
            router.reload({ only: ['users'] });
            if (data.profile_img) {
                setImagePreview(URL.createObjectURL(data.profile_img));
            }
            },
            onError: (errors) => {
                Object.values(errors).forEach((error) => {
                    toast.error(error);
                });
            },
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className={`bg-10 font-bold cursor-pointer ${buttonClassName} hover:bg-green-600 transition duration-200`}
                    {...props}
                >
                    {buttonContent} <PencilIcon size="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-w-2xl! p-0 pt-12 rounded-sm">
                <div className="overflow-auto scrollbar max-h-[80vh]">
                    <div className="bg-[var(--banner)] w-full text-center py-3">
                        <b className="text-xl">
                            Update{" "}
                            <b className="text-[var(--bg-10)]">Profile</b>
                        </b>
                    </div>
                    <p className="text-center max-w-sm m-auto py-6">
                        {isAdmin
                            ? "Update user profile information"
                            : "Update your personal information"}
                    </p>

                    <div className="px-10 flex flex-col gap-2">
                        <h3 className="text-base font-bold">Profile Picture</h3>
                        <div className="max-tn:flex-col flexy gap-12">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    className="w-32 aspect-square object-cover rounded-full"
                                    alt="Profile"
                                />
                            ) : (
                                <span className="bg-soft text-black max-md:m-auto font-bold text-3xl p-13 h-32 w-32 aspect-square rounded-full flexy">
                                    {user.firstName.charAt(0)}
                                </span>
                            )}

                            <span className="flex flex-col gap-2">
                                <input
                                    type="file"
                                    id="profile_img"
                                    name="profile_img"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="profile_img"
                                    className="button cursor-pointer flexy gap-2"
                                >
                                    <PencilIcon size="size-4" />
                                    {selectedImage
                                        ? "Change Picture"
                                        : "Add Picture"}
                                </label>

                                {imagePreview && (
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="button bg-red-700! flexy gap-2"
                                    >
                                        <TrashIcon />
                                        Remove Picture
                                    </button>
                                )}

                                {errors.profile_img && (
                                    <p className="text-red-500 text-sm">
                                        {errors.profile_img}
                                    </p>
                                )}
                            </span>
                        </div>

                        <div>
                            <form
                                onSubmit={handleSubmit}
                                className="gird place-items-center py-4"
                                encType="multipart/form-data"
                            >
                                <table className="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <TextInputGroup
                                                    label="First Name"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Your First Name Here..."
                                                    value={data.firstName}
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    error={errors.firstName}
                                                />
                                            </td>
                                            <td>
                                                <TextInputGroup
                                                    label="Last Name"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Your Last Name Here..."
                                                    value={data.lastName}
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    error={errors.lastName}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <TextAreaGroup
                                                    label="Bio"
                                                    id="bio"
                                                    name="bio"
                                                    placeholder="Your Message Here..."
                                                    value={data.bio}
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    rows="6"
                                                    error={errors.bio}
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
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    error={errors.email}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <TextInputGroup
                                                    label="New Password"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Your Password Here..."
                                                    value={data.password}
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    error={errors.password}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <TextInputGroup
                                                    label="Confirm Password"
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    placeholder="Confirm Password..."
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    onChange={handleChange}
                                                    classLabel="font-bold text-sm"
                                                    error={
                                                        errors.password_confirmation
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                colSpan="2"
                                                className="w-full text-center"
                                            >
                                                <button
                                                    type="submit"
                                                    className="button py-2! mt-4! text-base! w-52!"
                                                    disabled={processing}
                                                >
                                                    {processing
                                                        ? "Updating..."
                                                        : "Update"}
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
