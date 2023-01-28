import Navbar from "./Navbar";
import {FC} from "preact/compat";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-full pt-16">{children}</div>
    </>
  );
};

export default Layout;
