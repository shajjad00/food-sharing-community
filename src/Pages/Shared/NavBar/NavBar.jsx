import { Link, NavLink, useNavigate } from "react-router-dom";
import useProvider from "../../../Hooks/useProvider";
import toast from "react-hot-toast";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const { user, logOut } = useProvider();
  const navigate = useNavigate();
  const elements = (
    <>
      <li className=" border border-[#EE343F] italic text-[#EE343F] px-5 py-2 rounded">
        <Link to="/">Home</Link>
      </li>
      <li className=" border border-[#EE343F] italic text-[#EE343F] px-5 py-2 rounded">
        <Link to="/availableFoods">Available Foods</Link>
      </li>
      <li className=" border border-[#EE343F] italic text-[#EE343F] px-5 py-2 rounded">
        <Link to="/addFoods">Add a Food</Link>
      </li>
      <li className=" border border-[#EE343F] italic text-[#EE343F] px-5 py-2 rounded">
        <Link to="/manageFoods">Manage my Foods</Link>
      </li>
      <li className=" border border-[#EE343F] italic text-[#EE343F] px-5 py-2 rounded">
        <Link to="/myFoodRequest">My Food Request</Link>
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
      <div className="navbar  dark:bg-slate-700 shadow-lg mb-5">
        <div className="navbar-start">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="text-2xl text-[#EE343F] lg:hidden"
            >
              <BiMenu className="mx-3 cursor-pointer"></BiMenu>
            </label>
            <ul
              tabIndex={0}
              className=" dark:hover:text-white menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-white space-y-1 text-white"
            >
              {elements}
            </ul>
          </div>
          <Link
            to="/"
            className="hidden md:block text-xl font-semibold border  rounded-sm"
          >
            <img
              className="h-14 w-60"
              src="https://i.ibb.co/Ry3S090/Food-AND-Beverage.png"
              alt="Food Community Logo"
            />
          </Link>
        </div>
        <div className="navbar-center ml-8 hidden lg:flex">
          <ul className="px-1 flex gap-5 text-white dark:hover:text-white text-lg">
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
                    className="hover:border-2 hover:border-[#EE343F] bg-[#EE343F] text-white  rounded-md pl-16 py-2 hover:bg-white hover:text-[#EE343F] font-semibold"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="hover:border-2 hover:border-[#EE343F] bg-[#EE343F] text-white  rounded-md py-2 px-8 hover:bg-white hover:text-[#EE343F] font-semibold"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
