import { Outlet } from "react-router-dom";
import HeaderHero from "./HeaderHero";
import Footer from "./Footer";

function LayoutPage() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <Header /> */}
      <HeaderHero />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutPage;

// ffc sfc
