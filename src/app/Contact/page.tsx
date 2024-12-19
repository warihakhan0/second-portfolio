import React from "react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <div className="place-items-center">
      <div className="place-items-center">
        <h3 className="text-sm font-semibold my-2">Get In Touch</h3>
        <h1 className="text-2xl font-semibold">Contact me</h1>
        <p className="text-[11px] mt-2">Contact Wariha Khan</p>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <fieldset>
            <p className="my-2 text-gray-700">First name</p>
            <input type="text" className="border-[1.5px]  border-purple-800 rounded-[3px] w-full"/>
          </fieldset>
          <fieldset>
            <p className="my-2 text-gray-700">Last name</p>
            <input type="text" className="border-[1.5px]  border-purple-800 rounded-[3px] w-full"/>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <p className="my-2 text-gray-700">Email</p>
            <input type="email" className="border-[1.5px] border-purple-800 rounded-[3px] w-full p-1"/>
          </fieldset>
          <fieldset>
            <p className="my-2 text-gray-700">Phone number</p>
            <input type="tel" className="border-[1.5px] border-purple-800 rounded-[3px] w-full p-1"/>
          </fieldset>
        </div>
        <div>
          <p className="my-2 text-gray-700">Message</p>
          <textarea name="" id="" cols={60} rows={10} placeholder="Type your message....." className="border-[1.5px]  border-purple-800 rounded-[3px] p-2"></textarea>
        </div>
        <div className="flex flex-row gap-4">
          <input type="checkbox" name="" id="" /><p className="text-sm text-gray-800">I accept the terms</p>
        </div>
      </div>
      <Button variant={"secondary"} className="my-4">Submit</Button>
    </div>
  );
};

export default Contact;
