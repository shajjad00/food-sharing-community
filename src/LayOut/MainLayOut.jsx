import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main className=" min-h-[80vh]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default MainLayOut;
