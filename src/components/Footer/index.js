import React from 'react';
import logo from 'assets/images/minatemp-logo.png';
import instagramIcon from 'assets/icons/instagram.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import githubIcon from 'assets/icons/github.svg';
import withAnimation from 'HOCs/withAnimation';
import { sharedlinks } from 'shared-links';

const Footer = () => {
  const { portfolio, instagram, twitter, github } = sharedlinks;

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
          Copyright © 2022 Minatemps. Designed & Developed by{' '}
          <a
            href={portfolio}
            className="animate-pulse text-primary"
            target="_blank"
            rel="noreferrer">
            Yacouri
          </a>
        </p>
        <div className="flex align-center gap-2">
          <a
            href={github}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer"
            target="_blank"
            rel="noreferrer">
            <img className="w-4 text-white" src={githubIcon} alt="github" />
          </a>
          <a
            href={instagram}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer"
            target="_blank"
            rel="noreferrer">
            <img className="w-4 text-white" src={instagramIcon} alt="instagram" />
          </a>
          <a
            href={twitter}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer"
            target="_blank"
            rel="noreferrer">
            <img className="w-4 text-white" src={twitterIcon} alt="twitter" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary cursor-pointer">
            <img className="w-4 text-white" src={facebookIcon} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default withAnimation(Footer);
