import Image from "next/image";

export const Desktop = () => {
  return (
    <div className="h-full w-full">
      <div className=" ">
        <p className="text-yellow-300 font-black text-2xl tracking-wide ">
          Desktop Application Development
        </p>
        <p className="text-lg font-medium ">
          Building Native Desktop Applications for Windowds, OSX and Linux using
          a single javascript codebase
        </p>
        <div className="h-full flex flex-wrap justify-center md:justify-start gap-10 items-center pt-10">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg"
            width={100}
            height={100}
            alt="Electron"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
            width={100}
            height={100}
            alt="Windows"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            width={100}
            height={100}
            alt="linux"
          />
          <i
            className="devicon-apple-original text-center"
            style={{
              fontSize: 100,
            }}
          ></i>

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            width={100}
            height={100}
            alt="typescript"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            width={100}
            height={100}
            alt="nodejs"
          />
        </div>
      </div>
    </div>
  );
};
