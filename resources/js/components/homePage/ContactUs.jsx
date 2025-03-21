import React, { useState } from "react";
import TextInputGroup from "../ui/TextInputGroup";
import TextAreaGroup from "../ui/TextAreaGroup";
import Logo from "../ui/Logo";
import { Element } from "react-scroll";

const ContactUs = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const HData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Element name='ContectUs'>
      <div
        id="ContactUs"
        className="w-[100%] tn:max-w-[27rem] m-auto sm:max-w-xl md:max-w-xl lg:max-w-2xl max-w-[22rem] bg-30 rounded-2xl flex flex-col pt-6 py-5 shadow-xl pb-2 mb-10"
      >
        <div className="text-center pb-4">
          <Logo size="28" />
        </div>
        <div className="relative flex justify-center items-center text-xl font-bold">
          <div className="absolute inset-0 bg-10 opacity-15 z-0"></div>
          <span className="relative z-10">
            <span className="relative z-10 flexy gap- py-4">
              <p className="font-thin text-lg">Contact Customer Support</p>
            </span>
          </span>
        </div>
        <form className="gird place-items-center px-10 py-4">
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
                    id="email"
                    name="email"
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
                    label="Phone"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number Here..."
                    value={data.phone}
                    onChange={HData}
                    classLabel="font-bold text-sm"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <TextAreaGroup
                    label="Message Text"
                    id="message"
                    name="message"
                    placeholder="Your Message Here..."
                    value={data.message}
                    onChange={HData}
                    classLabel="font-bold text-sm"
                    rows="6"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="w-full text-center">
                  <button
                    type="submit"
                    className="button py-2! mt-4! text-base! w-52!"
                  >
                    Contact Us
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
