import React from "react";
import TextInputGroup from "../../components/ui/TextInputGroup";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export const Register = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const HData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const HSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="w-full grid place-items-center">
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
                    <TextInputGroup
                      label="Email"
                      type="email"
                      id="mail"
                      name="mail"
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
                      id="pass"
                      name="pass"
                      placeholder="Your Password Here..."
                      value={data.password}
                      onChange={HData}
                      classLabel="font-bold text-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Link
                      href='/login'
                      className="text-xs text-green-600 font-bold hover:text-gray-500"
                    >
                      Already Have An Account?
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button
                      type="submit"
                      className="button w-full text-base! py-2!"
                    >
                      Save
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
