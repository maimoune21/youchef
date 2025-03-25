import React, { useState } from "react";
import TextInputGroup from "../../components/ui/TextInputGroup";
import { Link, useForm, usePage } from "@inertiajs/react";

export const Login = () => {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
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
        if(!data.email){
            newErrors.email = "Email is required.";
        } else if (!data.password){
            newErrors.password = "Password is required.";
        }
        if (Object.keys(newErrors).length) {
            setError(newErrors);
            return;
        }
        post("/login");
    };
    return (
        <>
            <section className="w-full grid place-items-center">
                <div className="w-[90%] max-w-lg bg-white rounded-2xl flex flex-col pt-8 py-5 shadow-xl">
                    <div className="relative flex justify-center items-center h-11 text-xl font-bold">
                        <div className="absolute inset-0 bg-10 opacity-15 z-0"></div>
                        <span className="relative z-10 flexy gap-1.5">
                            <b>Log</b>
                            <b className="text-green">In</b>
                        </span>
                    </div>
                    <form
                        onSubmit={HSubmit}
                        className="gird place-items-center px-5 pt-4 "
                    >
                        <table className="w-full border-separate border-spacing-x-8 border-spacing-y-2">
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <TextInputGroup
                                            label="Email"
                                            type="email"
                                            id="mail"
                                            name="email"
                                            onChange={HData}
                                            placeholder="Your Email Here..."
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
                                            onChange={HData}
                                            classLabel="font-bold text-sm"
                                            error={error.password}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='flex items-center gap-1 text-sm'>
                                        {flash.failed && (
                                            <b className="text-red-500 text-sm">
                                                {flash.failed}
                                                <br />
                                            </b>
                                        )}
                                        <h1>New to YouChef?</h1>
                                        <Link
                                            href="/register"
                                            className="text-green-600 font-bold hover:text-gray-500"
                                        >
                                            Sign up
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button
                                            type="submit"
                                            className="button w-full text-base! py-2!"
                                        >
                                            Login
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

export default Login;
