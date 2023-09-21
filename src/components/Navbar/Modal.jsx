import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_3" className="modal md:hidden">
      <form
        method="dialog"
        className="absolute p-10 modal-box rounded-none max-w-full w-full min-h-screen bg-opacity-90 bg-neutral-very-dark-blue"
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute right-8 top-8">
          <img src="/images/icon-close.svg" alt="icon-close" />
        </button>
        <img src="/images/logo-bookmark-modal.svg" alt="logo" />
        <ul className="text-white text-center mt-10">
          <li className="py-5 tracking-widest border-y border-neutral-grayish-blue">
            <a href="" className="text-2xl">
              FEATURES
            </a>
          </li>
          <li className="py-5 tracking-widest border-t-0 border-y border-neutral-grayish-blue">
            <a href="" className="text-2xl">
              PRICING
            </a>
          </li>
          <li className="py-5 tracking-widest border-t-0 border-y border-neutral-grayish-blue">
            <a href="" className="text-2xl">
              CONTACT
            </a>
          </li>
          <li className="cursor-pointer py-3 tracking-widest border-2 rounded-lg mt-8">
            <a href="" className="text-2xl">
              LOGIN
            </a>
          </li>
        </ul>
        <div className="flex left-1/2 transform -translate-x-1/2 gap-12 absolute bottom-10">
          <a href="">
            <img src="/images/icon-facebook.svg" alt="facebook-icon" />
          </a>
          <a href="">
            <img src="/images/icon-twitter.svg" alt="twitter-icon" />
          </a>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
