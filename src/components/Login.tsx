interface ILoginProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsActive }: ILoginProps) => {
  const loginHandler = () => {
    setIsActive(false);
  };

  return (
    <div className="p-5">
      <div className="flex justify-end">
        <button onClick={() => setIsActive(false)} className="rounded-full h-8 w-8 bg-zinc-950">
          X
        </button>
      </div>
      <div className="mb-2">
        <h1 className="text-sm text-zinc-500 text-center">WELCOME BACK</h1>
        <p className="text-lg text-center mt-1 mb-9">Log into your account</p>
      </div>
      <div className="mt-2">
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
        onClick={() => setIsActive(false)}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 mt-4 rounded w-full"
      >
        Login now
      </button>
      <p className="text-zinc-500 mt-3 text-sm">
        Not registered yet?{" "}
        <span className="text-zinc-300 text-sm cursor-pointer" onClick={loginHandler}>
          Register {"->"}
        </span>
      </p>
    </div>
  );
};

export default Login;
