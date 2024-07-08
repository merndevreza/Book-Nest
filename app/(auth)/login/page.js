"use client";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import GoHomeBtn from "../_components/GoHomeBtn";

const LoginPage = () => {
  return (
    <div className="bg-secondary py-14 md:py-24 lg:py-28 px-2">
      <div className="max-w-3xl mx-auto space-y-6">
        <GoHomeBtn />
        <div className="bg-white dark:bg-gray-700 px-6 md:px-12 py-12 ">
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl dark:text-white  text-themePrimary font-semibold">
              Login
            </h2>
            <p className="text-lg">Welcome back to Book nest</p>
          </div>
          <LoginForm />
        </div>
        <div className="bg-white dark:bg-gray-700 px-6 md:px-12 py-6 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold text-themeSecondary dark:text-themePrimary ">
              New User?
            </h2>
            <Link className="outline-btn py-2 rounded-md px-3" href="/register">
            Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
