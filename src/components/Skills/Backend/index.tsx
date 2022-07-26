import Image from "next/image";

export const Backend = () => {
  return (
    <div className="h-full w-full flex justify-end">
      <div className=" ">
        <p className="text-yellow-300 font-black text-2xl tracking-wide  text-right">
          Backend Application Programming Interface Development
        </p>
        <p className="text-lg font-medium text-right ">
          Writing Business Logic at the API level is a the best way to seperate
          concerns.
        </p>
        <div className="mb-20 h-full flex justify-center flex-wrap gap-10 items-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
            width={100}
            height={100}
            alt="Graphql"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
            width={100}
            height={100}
            alt="Nest"
          />
          <i
            className="devicon-express-original text-center"
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
