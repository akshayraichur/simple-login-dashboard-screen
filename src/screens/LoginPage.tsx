import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-zinc-900 flex-col gap-10">
      <div>
        <img src={logo} className="h-10 w-10" />
      </div>
      <div className="p-5 w-3/12 bg-zinc-800 rounded-lg border-2 border-zinc-500">
        <div className="mb-2">
          <h1 className="text-sm text-zinc-500 text-center">WELCOME BACK</h1>
          <p className="text-lg text-center mt-1 mb-9">Log into your account</p>
        </div>
        <div className="mt-2 mb-4">
          <p className="text-sm">Email or Username</p>
          <input
            placeholder="Enter your email or username"
            className="rounded border border-zinc-600 bg-transparent p-3 w-full my-2 outline-none placeholder-zinc-600"
          />
        </div>

        <div>
          <div className=" mt-2 flex justify-between">
            <p className="text-sm">Password</p>
            <p className="text-xs text-zinc-500">Forgot Password?</p>
          </div>
          <input
            placeholder="Choose a strong password"
            className="rounded border border-zinc-600 bg-transparent p-3 w-full my-2 outline-none placeholder-zinc-600"
          />
        </div>

        <button
          onClick={() => navigate("/home")}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 mt-4 rounded w-full"
        >
          Login now
        </button>
        <p className="text-zinc-500 mt-3 text-sm">
          Not registered yet?{" "}
          <span className="text-zinc-300 text-sm cursor-pointer" onClick={() => null}>
            Register {"->"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
