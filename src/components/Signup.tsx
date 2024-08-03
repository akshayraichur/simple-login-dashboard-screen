interface ISignupProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup = ({ setIsActive, setIsLoginActive }: ISignupProps) => {
  const loginHandler = () => {
    setIsActive(false);
    setIsLoginActive(true);
  };
  return (
    <div className="p-5">
      <div className="flex justify-end">
        <button onClick={() => setIsActive(false)} className="rounded-full h-8 w-8 bg-zinc-950">
          X
        </button>
      </div>
      <div className="mb-2">
        <h1 className="text-sm text-zinc-500 text-center">SIGN UP</h1>
        <p className="text-lg text-center mt-1">Create an account to continue</p>
      </div>
      <div>
        <p className="text-sm">Email</p>
        <input
          placeholder="Enter your email"
          className="rounded border border-zinc-600 bg-transparent p-3 w-full my-2 outline-none placeholder-zinc-600"
        />
      </div>
      <div>
        <p className="text-sm">Username</p>
        <input
          placeholder="Choose a preferred username"
          className="rounded border border-zinc-600 bg-transparent p-3 w-full my-2 outline-none placeholder-zinc-600"
        />
      </div>
      <div>
        <p className="text-sm">Password</p>
        <input
          placeholder="Choose a strong password"
          className="rounded border border-zinc-600 bg-transparent p-3 w-full my-2 outline-none placeholder-zinc-600"
        />
      </div>

      <button
        onClick={() => setIsActive(false)}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 mt-2 rounded w-full"
      >
        Continue
      </button>
      <p className="text-zinc-500 mt-3 text-sm">
        Already have an account?{" "}
        <span className="text-zinc-300 text-sm cursor-pointer" onClick={loginHandler}>
          Login {"->"}
        </span>
      </p>
    </div>
  );
};

export default Signup;
