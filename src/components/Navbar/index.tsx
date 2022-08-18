import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
const LinkItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link}>
      <li className="hover:font-bold cursor-pointer py-4 hover:text-yellow-600 duration-500">
        {text}
      </li>
    </Link>
  );
};
export const NavBar = () => {
  const router = useRouter();
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <div className="fixed w-full bg-black h-30 z-10  ">
      <nav className="flex items-center p-3 flex-wrap md:justify-between md:container md:mx-auto ">
        <div>
          <Link href={"/"}>
            <span className="text-2xl font-bold border-b-2  border-yellow-600 cursor-pointer tracking-wide">
              Castro Steven
            </span>
          </Link>
        </div>
        <button
          className="ml-auto md:hidden pt-3 pr-3"
          onClick={() => setHideMenu((value) => !value)}
        >
          <FaHamburger
            size={30}
            color="yellow"
            className="cursor-pointer hover:animate-pulse"
          />
        </button>
        <div
          className={`w-full md:inline-flex md:flex-grow md:w-auto   ${
            !hideMenu ? "" : "hidden"
          }`}
        >
          <ul className="flex font-bold flex-col md:flex-row md:gap-5 md:items-center bg-gray-200 p-2 rounded-lg mt-2 text-black md:bg-inherit md:text-inherit ml-auto ">
            <LinkItem text="Skills" link="#skills" />
            <LinkItem text="Experience" link="#experience" />
            <LinkItem text="Contact" link="#contact" />
            <div className="py-4">
              <button
                onClick={() => {
                  router.push("/posts");
                }}
                className="block bg-yellow-500 text-black font-bold p-2 rounded-md hover:bg-yellow-600 hover:text-white"
              >
                Read My Blog
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
