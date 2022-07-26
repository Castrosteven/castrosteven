import Image from "next/image";

export const Cloud = () => {
  return (
    <div className="h-full w-full flex ">
      <div className=" ">
        <p className="text-yellow-300 font-black text-2xl tracking-wide  ">
          Cloud Experience
        </p>
        <p className="text-lg font-medium  ">
          Serverless Infrastructure and Micro Services is the future of
          development.
        </p>
        <div className="h-full flex flex-wrap justify-center gap-10 items-center">
          <i
            className=" devicon-amazonwebservices-plain-wordmark text-center"
            style={{
              fontSize: 100,
            }}
          ></i>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
            width={100}
            height={100}
            alt="Google"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
            width={100}
            height={100}
            alt="Heroku"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
            width={100}
            height={100}
            alt="Firebase"
          />

          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            width={100}
            height={100}
            alt="python"
          />
          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            }
            width={100}
            height={100}
            alt="Docker"
          />
        </div>
      </div>
    </div>
  );
};
