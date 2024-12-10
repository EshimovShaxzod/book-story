"use client";

import Logo from "../assets/images/logo.png";

import { Button, Navbar } from "flowbite-react";

 const Header = () => {
  return (
    <header className="shadow-sm py-2 bg-[#FDF8EE]">
      <Navbar
        fluid
        rounded
        className="w-full  max-w-[1440px] mx-auto bg-[#FDF8EE]"
      >
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="mr-3 h-9 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="px-6">Sign in</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-[16px]" href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-[16px]" href="#">
            About us
          </Navbar.Link>
          <Navbar.Link className="text-[16px]" href="#">
            Courses
          </Navbar.Link>
          <Navbar.Link className="text-[16px]" href="#">
            Our Service
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header
