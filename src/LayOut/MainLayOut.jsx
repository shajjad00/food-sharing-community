import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

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
    </div>
  );
};

export default MainLayOut;
