import Image from "next/image";

export const FrontEnd = () => {
  return (
    <div className="h-full w-full">
      <div className="">
        <p className="text-yellow-300 font-black text-2xl tracking-wide ">
          Front End User Interface Development
        </p>
        <p className="text-lg font-medium">
          Over 7 years of proffesional experience building responsive front end
          web applications
        </p>
        <div className=" h-full flex gap-10 items-center pt-10 flex-wrap justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            width={100}
            height={100}
            alt="HTML"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            width={100}
            height={100}
            alt="CSS"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            width={100}
            height={100}
            alt="JS"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            width={100}
            height={100}
            alt="typescript"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            width={100}
            height={100}
            alt="react"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            width={100}
            height={100}
            alt="vuejs"
          />
          <i
            className="devicon-nuxtjs-plain"
            style={{
              fontSize: 100,
            }}
          ></i>

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            width={100}
            height={100}
            alt="nodejs"
          />

          <i
            className="devicon-nextjs-plain"
            style={{
              fontSize: 100,
            }}
          ></i>

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            width={100}
            height={100}
            alt="tailwindcss"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            width={100}
            height={100}
            alt="material"
          />
        </div>
      </div>
    </div>
  );
};
