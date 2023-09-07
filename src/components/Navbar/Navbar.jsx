import React from "react";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <nav className="navbar p-5 md:px-[10%]">
      <div className="navbar-start">
        <img src="/images/logo-bookmark.svg" alt="logo" />
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            <li>
              <a href="" className="hover:bg-white hover:text-primary-soft-red">
                FEATURES
              </a>
            </li>
            <li>
              <a href="" className="hover:bg-white hover:text-primary-soft-red">
                PRICING
              </a>
            </li>
            <li className="mr-10">
              <a href="" className="hover:bg-white hover:text-primary-soft-red">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href=""
            className="hover:bg-white border-2 shadow-lg hover:text-primary-soft-red hover:border-primary-soft-red btn max-md:hidden bg-primary-soft-red text-white w-32"
          >
            LOGIN
          </a>
        </div>
      </div>
      <button
        className="btn bg-white border-none md:hidden"
        onClick={() => window.my_modal_3.showModal()}
      >
        <img src="/images/icon-hamburger.svg" alt="icon-menu" />
      </button>
      <Modal />
    </nav>
  );
};

export default Navbar;
