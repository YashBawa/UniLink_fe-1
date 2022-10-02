import { useEffect } from "react";
import logo from "../Images/logo.png";
import preview from "../Images/preview.png";

export default function Home() {
  useEffect(() => {
    document.title = "Uni-Link";
  }, []);
  return (
    <div className="bg-gradient-to-bl from-[#091360]  to-[#2c55ea] min-h-screen p-2 text-[#66fcf1]">
      <div>
        <div className="flex flex-col text-6xl font-extrabold justify-center items-center w-full text-[#184E77]">
          <img src={logo} alt="uni-link" />
        </div>
        <div className="pt-1">
          <p className="text-2xl flex justify-center font-medium">
            The connection which every college needs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-2 pb-2">
          <a
            href="/home"
            className="bg-[#66fcf1] text-black font-bold rounded-lg p-2 px-3 shadow-md shadow-[#1A759F] hover:shadow-lg hover:scale-110 hover:shadow-[#1A759F] transition duration-300"
          >
            Log in
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img src={preview} alt="home_image" />
        </div>
      </div>
    </div>
  );
}
