import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 p-5">
      <div className="navbar-start">
        <img src="/images/logo-bookmark.svg" alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>FEATURES</a>
          </li>
          <li>
            <a>PRICING</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn max-md:hidden bg-primary-soft-red text-white w-32">
          LOGIN
        </a>
      </div>
      <button
        className="btn bg-white border-none md:hidden"
        onClick={() => window.my_modal_3.showModal()}
      >
        <img src="/images/icon-hamburger.svg" alt="icon-menu" />
      </button>
      <dialog id="my_modal_3" className="modal md:hidden">
        <form
          method="dialog"
          className="absolute pt-10 modal-box rounded-none w-[100vw] min-h-screen bg-opacity-90 bg-neutral-very-dark-blue"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-8">
            <img src="/images/icon-close.svg" alt="icon-close" />
          </button>
          <img src="/images/logo-bookmark-modal.svg" alt="logo" />
          <ul className="text-white text-center mt-10">
            <li className="py-5 tracking-widest border-y border-neutral-grayish-blue">
              <a className="text-2xl">FEATURES</a>
            </li>
            <li className="py-5 tracking-widest border-t-0 border-y border-neutral-grayish-blue">
              <a className="text-2xl">PRICING</a>
            </li>
            <li className="py-5 tracking-widest border-t-0 border-y border-neutral-grayish-blue">
              <a className="text-2xl">CONTACT</a>
            </li>
            <li className="cursor-pointer py-3 tracking-widest border-2 rounded-lg mt-8">
              <a className="text-2xl">LOGIN</a>
            </li>
          </ul>
          <div className="flex left-1/2 transform -translate-x-1/2 gap-12 absolute bottom-10">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
          </div>
        </form>
      </dialog>
    </nav>
  );
};

export default Navbar;
