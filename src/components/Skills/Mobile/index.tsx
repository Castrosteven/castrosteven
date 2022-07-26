import Image from "next/image";

export const Mobile = () => {
  return (
    <div className="h-full w-full flex justify-end ">
      <div className="">
        <p className="text-yellow-300 font-black text-2xl tracking-wide text-right">
          Mobile Application Development
        </p>
        <p className="text-lg font-medium text-right">
          Building Native Mobile Applications for IOS and Android using a single
          javascript codebase
        </p>
        <div className="h-full flex gap-10 justify-center items-center flex-wrap">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            width={100}
            height={100}
            alt="Android"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
            width={100}
            height={100}
            alt="xcode"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            width={100}
            height={100}
            alt="React"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            width={100}
            height={100}
            alt="typescript"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
            width={100}
            height={100}
            alt="flutter"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
            width={100}
            height={100}
            alt="ionic"
          />
        </div>
      </div>
    </div>
  );
};
