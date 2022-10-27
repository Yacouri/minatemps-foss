import withAnimation from 'HOCs/withAnimation';
import React from 'react';

const Hero = () => {
  return (
    <section className="mx-auto max-w-screen-xl pb-4 px-4 my-10 sm:px-8 md:my-32">
      <div className="text-center space-y-4">
        <h1 className="text-light font-bold text-4xl md:text-7xl">
          Building a digital products
          <br />
          For our customers{' '}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Morbi elementum mi et tortor semper
          <br />
          Sollicitudin magna eu ullamcorper sagittis.{' '}
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-2 justify-center items-center md:flex-row md:gap-6">
        <button className="primary-btn w-full md:w-fit">Get started</button>
        <button className="outlined-btn bg-secondary border-none w-full md:w-fit">
          Discover Services
        </button>
      </div>
    </section>
  );
};

export default withAnimation(Hero);
