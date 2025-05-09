import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const CustomerLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default CustomerLayout;