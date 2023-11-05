import { Link, NavLink, useNavigate } from "react-router-dom";
import useProvider from "../../../Hooks/useProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useProvider();
  const navigate = useNavigate();
  const elements = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/availableFoods">Available Foods</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/addFoods">Add a Food</Link>
      </li>
      <li>
        <Link to="/manageFoods">Add a Food</Link>
      </li>
    </>
  );

  //sign out

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("Sign Out Successful");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {" "}
      <div className="navbar bg-green-500 dark:bg-slate-700">
        <div className="navbar-start">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-ghost dark:text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dark:hover:text-white menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-white"
            >
              {elements}
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case hidden md:block text-xl font-semibold border border-white text-gray-300 rounded-md"
          >
            <img
              className="h-14 w-60"
              src="https://i.ibb.co/4Z1SK39/Untitled-design.png"
              alt="Fod and Beverage"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-white dark:hover:text-white text-lg">
            {elements}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="hover:border-2 hover:border-green-500 bg-green-500 text-white  rounded-md pl-16 py-2 hover:bg-white hover:text-green-500 font-semibold"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="hover:border-2 mr-2 dark:bg-slate-800 hover:border-green-500 bg-green-500 text-white  rounded-md px-12  py-2 hover:bg-white hover:text-green-500 font-semibold border dark:hover:text-white dark:hover:border-white border-white"
            >
              Login
            </NavLink>
          )}
          {/* <div
      className=" cursor-pointer ml-3"
      onClick={handleThemeSwitch}
    >
      {theme == "dark" ? (
        <BsSun
          className="text-4xl font-bold rounded-full "
          style={styles}
        ></BsSun>
      ) : (
        <BsMoonFill className="text-4xl font-bold rounded-full"></BsMoonFill>
      )}
    </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
