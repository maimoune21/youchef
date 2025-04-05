import React, { useState } from "react";
import TextInputGroup from "../../components/ui/TextInputGroup";
import { Link, useForm, usePage } from "@inertiajs/react";

export const Register = () => {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [error, setError] = useState({});
    const HData = (e) => {
        setData(e.target.name, e.target.value);
        if (errors[e.target.name] || flash.failed) {
            delete errors[e.target.name];
            flash.failed = null;
        }
        setError((prevState) => ({
            ...prevState,
            [e.target.name]: "" 
        }));
        if (flash.failed) {
            flash.failed = null;
        }
    };

    const HSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!data.firstName) {
            newErrors.firstName = "First Name is required.";
        } else if (!data.lastName) {
            newErrors.lastName = "Last Name is required.";
        } else if (!data.email) {
            newErrors.email = "Email is required.";
        } else if (!data.password) {
            newErrors.password = "Password is required.";
        } else if (!data.password_confirmation) {
            newErrors.password_confirmation = "Password confirmation is required.";
        } else if (data.password !== data.password_confirmation) {
            newErrors.password_confirmation = "Passwords do not match.";
        }

        if (Object.keys(newErrors).length) {
            setError(newErrors);
            return;
        }

        post("/register");
    };

    return (
        <>
            <section className="w-full grid place-items-center mt-5">
                <div className="w-[90%] max-w-lg bg-white rounded-2xl flex flex-col pt-8 pb-3 shadow-xl">
                    <div className="relative flex justify-center items-center h-11 text-xl font-bold">
                        <div className="absolute inset-0 bg-10 opacity-15 z-0"></div>
                        <span className="relative z-10">
                            <span className="relative z-10 flexy gap-2">
                                <b>Sign</b>
                                <b className="text-green">Up</b>
                            </span>
                        </span>
                    </div>
                    <form
                        onSubmit={HSubmit}
                        className="gird place-items-center px-10 py-4"
                    >
                        <table className="w-full border-separate border-spacing-x-2 border-spacing-y-2">
                            <tbody>
                                <tr className="">
                                    <td>
                                        <TextInputGroup
                                            label="First Name"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Your First Name Here..."
                                            value={data.firstName}
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.firstName}
                                        />
                                    </td>
                                    <td>
                                        <TextInputGroup
                                            label="Last Name"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Your Last Name Here..."
                                            value={data.lastName}
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.lastName}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <TextInputGroup
                                            label="Email"
                                            type="email"
                                            id="mail"
                                            name="email"
                                            placeholder="Your Email Here..."
                                            value={data.email}
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.email}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <TextInputGroup
                                            label="Password"
                                            type="password"
                                            id="pass"
                                            name="password"
                                            placeholder="Your Password Here..."
                                            value={data.password}
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.password}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <TextInputGroup
                                            label="Confirm Password"
                                            type="password"
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="Confirm Your Password..."
                                            value={data.password_confirmation}
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.password_confirmation}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='text-sm flex items-center gap-1'>
                                        {errors.password && (
                                            <b className="text-red-500 text-sm">
                                                {errors.password}
                                                <br />
                                            </b>
                                        )}
                                        <h1>Already have an account?</h1>
                                        <Link
                                            href="/login"
                                            className=" text-green-600 font-bold hover:text-gray-500"
                                        >
                                            Log in
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button
                                            type="submit"
                                            className="button w-full text-base! py-2!"
                                        >
                                            Sign Up
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Register;