import { Footer, Navbar } from "flowbite-react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Navbar
            fluid={false}
            rounded={false}
            className="bg-slate-50 shadow-sm"
        >
            <Navbar.Brand href="#">
                <span className="text-md">
                    Frontend Test
                </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
          <Navbar.Collapse>
            <li className="font-normal text-gray-500 hover:text-gray-700 transition-all"> 
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="font-normal text-gray-500 hover:text-gray-700 transition-all"> 
              <NavLink to="/users">Users</NavLink>
            </li>
            <li className="font-normal text-gray-500 hover:text-gray-700 transition-all"> 
              <NavLink to="/flow">Flow</NavLink>
            </li>
          </Navbar.Collapse>
        </Navbar>
            <Outlet />
        <Footer container={true} className="bg-slate-50 shadow-sm">
            <div className="w-full text-center">
                <Footer.Copyright
                    href="#"
                    by="Frontend Test"
                    year={2022}
                />
            </div>
        </Footer>
    </>
  )
};

export default Layout;