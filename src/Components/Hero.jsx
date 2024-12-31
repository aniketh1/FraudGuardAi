import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex-1 h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      <div className="text-center space-y-6 bg-black h-full w-full flex flex-col justify-center items-center bg-opacity-50 px-4 py-6 rounded-lg">
        <div className="h-1/4">
            <h1 className="text-6xl font-bold text-white">
            Welcome to Fraud Detection AI
            </h1>
        </div>
        <div className="flex flex-col gap-4 w-full">

            <p className="text-2xl text-white italic">
            "In a world where digital transactions are growing rapidly, the need for advanced fraud detection systems is more important than ever. Our AI-powered platform analyzes patterns, behaviors, and anomalies to identify fraudulent activities with high precision. With cutting-edge technology and machine learning, we provide businesses and individuals with the security they deserve. Trust our platform to protect your financial transactions and ensure a safe and reliable experience for everyone."            </p>
            <Link
            to="detect"
            smooth={true}
            duration={500}
            className=""
            >
                <button className="bg-blue-500 text-white items-start px-6 py-3 rounded-lg font-medium hover:bg-blue-600 cursor-pointer">
                Get Started
                </button>
           
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
