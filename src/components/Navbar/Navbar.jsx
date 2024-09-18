import { useState } from "react";
import Link from "./Link/Link";

import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
  const [open , setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div className="text-2xl" onClick={() => setOpen(!open)}>
       {open === true ? <IoIosClose /> : <IoMenu />}
      </div>
      <ul className="flex gap-12">
       
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
