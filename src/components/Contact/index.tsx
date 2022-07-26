import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input = ({ id, label, ...rest }: Props) => {
  return (
    <div className="w-full text-black flex flex-col gap-2">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        {...rest}
        className="p-2 bg-yellow-400 font-bold rounded-md placeholder:text-black border border-black"
      />
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="w-full h-full  " id="contact">
      <div className="flex">
        <span className="text-3xl font-bold pr-5">Contact</span>
        <div className="border-yellow-400 border-b-2 w-full"></div>
      </div>

      <div className="w-full mt-20 mb-20 flex items-center justify-center">
        <form
          action=""
          className="md:w-1/2 h-full pt-10 pb-10 bg-white rounded-md flex flex-col p-5 gap-5"
        >
          <div className="flex gap-10">
            <Input
              label="Full Name"
              placeholder="John Doe"
              type={"text"}
              required
            />
            <Input
              label="Email"
              placeholder="Recruiter@company.com"
              type={"email"}
              required
            />
          </div>
          <div className="flex ">
            <Input
              required
              label="Phone Number"
              type={"tel"}
              placeholder="347-999-9999"
            />
          </div>

          <div className="flex flex-col h-full w-full gap-2 ">
            <label htmlFor={"message"} className="font-bold text-black ">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hello I'm interested in filling this position."
              className="p-2 bg-yellow-400 font-bold text-black rounded-md placeholder:text-black border border-black h-full w-full"
            ></textarea>
          </div>
          <div className="flex">
            <button className="p-2 text-black font-bold">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
