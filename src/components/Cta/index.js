import React from 'react';
import patterns from 'assets/images/pattern.png';
import logo from 'assets/images/logo-white.png';
import withAnimation from 'HOCs/withAnimation';

const Cta = () => {
  return (
    <section className="p-4 md:my-32">
      <div
        className="w-full mx-auto p-12 rounded-md md:w-7/12 md:rounded-full"
        style={{ background: `url('${patterns}') transparent repeat`, backgroundSize: 'contain' }}>
        <div className="mb-16">
          <img className="w-16 md:lock md:mx-auto" src={logo} alt="" />
        </div>
        <div className="md:text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Get started today</h1>
          <p className="text-white font-normal">
            Before starting your project it will pass
            <br />
            through this process in order to make it organized and clean.
          </p>
        </div>
        <div className="flex mt-12 md:justify-center">
          <a className="primary-btn font-normal" href="mailto:minatemps@gmail.com">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default withAnimation(Cta);
