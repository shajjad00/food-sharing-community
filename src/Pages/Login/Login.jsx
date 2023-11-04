import { Link, useNavigate } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, googleLogIn } = useProvider();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        if (res.user) {
          navigate("/");
          toast.success("Sign in Successful");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        if (result.user) {
          navigate("/");
          toast.success("Sign In Successful");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Welcome! So good to have you back!
          </p>
          <form onSubmit={handleLogout}>
            <p className="text-red-500"></p>
            <div className="space-y-2">
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-600 mb-2 block"
                ></label>
                Email address
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label
                  htmlFor="password"
                  className="text-gray-600 mb-2 block"
                ></label>
                Password
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                    placeholder="***********"
                  />
                  <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300"></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
              >
                Login
              </button>
            </div>
          </form>
          <p
            className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-gray-500
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-gray-500 before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-lg p-4"
          >
            or
          </p>
          <div className="w-full relative">
            <button
              onClick={handleGoogleLogin}
              className="bg-teal-500 rounded-md px-4 py-2 w-full text-white font-medium"
            >
              Continue with Google
            </button>
            <FcGoogle className=" absolute top-2 left-[120px] text-2xl"></FcGoogle>
          </div>
          <div className="flex gap-2 pt-5">
            <p className="text-gray-600 text-sm">Don&apos;t have an account?</p>
            <Link
              className="text-gray-600 text-sm underline"
              to="/register"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
