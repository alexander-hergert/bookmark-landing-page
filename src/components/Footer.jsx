import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-very-dark-blue text-white p-10 w-full">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
        <article className="flex flex-col md:flex-row md:items-center md:gap-12">
          <img
            className="mb-5 md:mb-0"
            src="/images/logo-bookmark-footer.svg"
            alt="logo"
          />
          <ul className="text-center text-sm py-5 md:flex md:flex-row md:gap-5">
            <li>
              <a href="" className="hover:text-primary-soft-red">
                FEATURES
              </a>
            </li>
            <li className="py-5 md:py-0">
              <a href="" className="hover:text-primary-soft-red">
                PRICING
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary-soft-red">
                CONTACT
              </a>
            </li>
          </ul>
        </article>
        <article className="flex items-center mt-5 md:mt-0 gap-5">
          <a href="">
            <img
              src="/images/icon-facebook.svg"
              alt="facebook"
              className="footer-link"
            />
          </a>
          <a href="">
            <img
              src="/images/icon-twitter.svg"
              alt="twitter"
              className="footer-link"
            />
          </a>
        </article>
      </div>
      <p className="attribution mt-10">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Alexander Hergert</a>.
      </p>
    </footer>
  );
};

export default Footer;
