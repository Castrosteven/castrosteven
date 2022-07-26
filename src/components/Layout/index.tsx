import { ReactNode } from "react";
import { NavBar } from "../Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-black text-white">
      <NavBar />
      {children}
    </div>
  );
};
