import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Background from "../assets/moon.jpg"

export const Layout = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[10px]"
        style={{ backgroundImage: `url('${Background}')` }}
      ></div>
      <div className="relative z-10">
        <Toaster />
        <Outlet />
      </div>
    </main>
  );
};
