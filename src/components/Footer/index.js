import React from 'react';
import logo from 'assets/images/minatemp-logo.png';
import instagram from 'assets/icons/instagram.svg';
import twitter from 'assets/icons/twitter.svg';
import facebook from 'assets/icons/facebook.svg';
import withAnimation from 'HOCs/withAnimation';

const Footer = () => {
  return (
    <footer className="mt-12 mx-auto max-w-7xl p-8 sm:px-6">
      <div className="flex flex-col flex-wrap gap-6 justify-between md:flex-nowrap md:flex-row md:items-center">
        <div>
          <img className="w-12 h-12" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="#" className="text-base text-gray-500 hover:text-light flex-1">
            About us
          </a>
          <a href="#" className="text-base text-gray-500 hover:text-light">
            Pricing
          </a>
          <a href="#" className="text-base text-gray-500 hover:text-light">
            Testimonials
          </a>
          <a href="#" className="text-base text-gray-500 hover:text-light">
            Contact
          </a>
          <a href="#" className="text-base text-gray-500 hover:text-light">
            FAQ&apos;s
          </a>
        </div>
      </div>
      <div className="my-8 h-[1px] bg-secondary" />
      <div className="flex flex-wrap gap-6 justify-between items-center md:flex-nowrap">
        <p className="font-normal text-gray-500">
          Copyright © 2022 Minatemps. All rights reserved.
        </p>
        <div className="flex align-center gap-2">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer">
            <img className="w-4 text-white" src={instagram} alt="instagram" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer">
            <img className="w-4 text-white" src={twitter} alt="twitter" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer">
            <img className="w-4 text-white" src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default withAnimation(Footer);
