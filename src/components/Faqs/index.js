import withAnimation from 'HOCs/withAnimation';
import React from 'react';
import FaqsCard from './FaqsCard';

const Faqs = () => {
  const faqsList = [
    {
      q: 'Do you have free templates ?',
      a: 'Yes, we have open sourced templates that we upload on our github organization.'
    },
    {
      q: 'Where can i find more templates ?',
      a: 'Answered all frequently asked questions, Still confused? feel free to contact us.'
    },
    {
      q: 'What kind of tools you are using for design ?',
      a: 'Answered all frequently asked questions, Still confused? feel free to contact us.'
    }
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mx-auto px-4 lg:px-8 md:my-32">
      <div className="space-y-3 text-center">
        <h1 className="text-light text-3xl font-semibold">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, index) => (
          <FaqsCard idx={index} faqsList={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default withAnimation(Faqs);
