import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[10px]"
        style={{ backgroundImage: "url('src/assets/moon.jpg')" }}
      ></div>
      <div className="relative z-10">
        <Toaster />
        <Outlet />
      </div>
    </main>
  );
};
