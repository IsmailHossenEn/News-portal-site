import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-3 row-span-2 md:row-span-1">
        <aside className="left lg:col-span-3 md:col-span-2 col-span-12">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="lg:col-span-6 md:col-span-8 col-span-9">
          <Outlet></Outlet>
        </section>
        <aside className="lg:col-span-3 md:col-span-2 col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
