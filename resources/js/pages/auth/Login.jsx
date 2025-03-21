import React from "react";
import TextInputGroup from "../../components/ui/TextInputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });


  const HData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const HSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    navigate("/youchef-ui/home");
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
                      name="mail"
                      onChange={HData}
                      placeholder="Your Email Here..."
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
                      onChange={HData}
                      classLabel="font-bold text-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Link
                      to={`/youchef-ui/register`}
                      className="text-xs text-green-600 font-bold hover:text-gray-500"
                    >
                      Create An Account !
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit" className="button w-full text-base! py-2!">
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

export default Login;
