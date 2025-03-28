import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import TextInputGroup from "../ui/TextInputGroup";
import TextAreaGroup from "../ui/TextAreaGroup";
import Logo from "../ui/Logo";
import { Element } from "react-scroll";

const ContactUs = () => {
    const { flash } = usePage().props;
    const { data, setData, post, errors, processing, reset } = useForm({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        subject: "",
        content: "",
    });

    const [flashMsg, setFlashMsg] = useState("hidden");

    const handleChange = (field, value) => {
        setData(field, value);
        if (errors[field]) errors[field] = "";
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact/store", {
            onSuccess: () => {
                reset();
                setFlashMsg("showed");
                setTimeout(() => {
                    setFlashMsg("hidden");
                }, 2000);
            },
            preserveScroll: true,
        });
    };

    return (
        <Element name="ContactUs">
            <div className="w-[100%] tn:max-w-[27rem] m-auto sm:max-w-xl md:max-w-xl lg:max-w-2xl max-w-[22rem] bg-30 rounded-2xl flex flex-col pt-6 py-5 shadow-xl pb-2 mb-10">
                <div className="text-center pb-4">
                    <Logo size="28" />
                </div>
                <div className="relative flex justify-center items-center text-xl font-bold">
                    <div className="absolute inset-0 bg-10 opacity-15 z-0"></div>
                    <span className="relative z-10">
                        <span className="relative z-10 flexy gap- py-4">
                            <p className="font-thin text-lg">
                                Contact Customer Support
                            </p>
                        </span>
                    </span>
                </div>

                {/* Success message */}
                {flash.success && (
                    <div
                        className={`fixed top-20 z-40 -right-100 ${
                            flashMsg === "showed" ? "right-6" : "-right-50"
                        } bg-green-600 transition-all duration-500 px-3 py-2 rounded-md shadow-lg text-sm text-white`}
                    >
                        {flash.success}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="grid place-items-center px-10 py-4"
                >
                    <table className="w-full border-separate border-spacing-2">
                        <tbody>
                            <tr>
                                <td>
                                    <TextInputGroup
                                        label="First Name"
                                        id="fname"
                                        name="fname"
                                        placeholder="Enter your First Name..."
                                        value={data.fname}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("fname", e.target.value)}
                                        error={errors.fname}
                                    />
                                </td>
                                <td>
                                    <TextInputGroup
                                        label="Last Name"
                                        id="lname"
                                        name="lname"
                                        placeholder="Enter your Last Name..."
                                        value={data.lname}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("lname", e.target.value)}
                                        error={errors.lname}
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
                                        placeholder="Enter your Email..."
                                        value={data.email}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        error={errors.email}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <TextInputGroup
                                        label="Phone"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your Phone Number..."
                                        value={data.phone}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        error={errors.phone}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <TextInputGroup
                                        label="Subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter your Subject..."
                                        value={data.subject}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("subject", e.target.value)}
                                        error={errors.subject}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <TextAreaGroup
                                        label="Content"
                                        id="content"
                                        name="content"
                                        placeholder="Enter your Message..."
                                        value={data.content}
                                        classLabel="font-bold text-sm"
                                        onChange={(e) => handleChange("content", e.target.value)}
                                        rows="6"
                                        error={errors.content}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-center">
                                    <button
                                        type="submit"
                                        className="button py-2! mt-4! text-base! w-52!"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Sending..."
                                            : "Contact Us"}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </Element>
    );
};

export default ContactUs;
