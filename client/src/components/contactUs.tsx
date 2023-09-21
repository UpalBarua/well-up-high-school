import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { PiMapPinLineBold } from "react-icons/pi";
import contact from "../../public/contact.svg";
import CustomButton from "./CustomButton";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly ">
      <div>
        <div>
          <h1 className="text-[2.2rem] text-blue-600 pb-2 font-bold">
            Get In Touch
          </h1>
          <p className="text-[1.3rem] pb-8">
            We are here for you! How can we help you?
          </p>
        </div>
        <div>
          <Input
            className="mb-4 h-14 bg-blue-50 "
            type="text"
            placeholder="Enter your name"
          />
          <Input
            className="mb-4 h-14 bg-blue-50"
            type="email"
            placeholder="Enter your email"
          />
          <Textarea
            className="bg-blue-50  h-36"
            placeholder="Go ahead, we are listening...."
          />
        </div>
        <CustomButton className="px-6 w-full">Submit</CustomButton>
      </div>

      <div className="mt-6 lg:mt-10">
        <div>
          <Image src={contact} alt="" height={300} width={300}></Image>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex gap-6 items-center pb-4">
            <PiMapPinLineBold className="text-[1.6rem] text-blue-600 "></PiMapPinLineBold>
            <h1>674 Warless ,Chittagong</h1>
          </div>
          <div className="flex gap-6 items-center pb-4">
            <BiSolidPhoneCall className="text-[1.6rem] text-blue-600"></BiSolidPhoneCall>
            <h1>01927129874</h1>
          </div>
          <div className="flex gap-6 items-center pb-4">
            <CgMail className="text-[1.6rem] text-blue-600"></CgMail>
            <h1>wellup67@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
