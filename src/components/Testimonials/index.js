import SectionTitle from 'components/SectionTitle';
import React from 'react';
import avatar1 from 'assets/avatars/avatar1.png';
import avatar2 from 'assets/avatars/avatar2.png';
import avatar3 from 'assets/avatars/avatar3.png';
import avatar4 from 'assets/avatars/avatar4.png';
import avatar5 from 'assets/avatars/avatar5.png';
import TestimonialCard from './TestimonialCard';
import withAnimation from 'HOCs/withAnimation';

const Testimonials = () => {
  const feedbacks = [
    {
      name: 'Sofie Aeo',
      position: 'CTO - Google',
      img: avatar1,
      content: 'Actually it was a great experience working with Oweeb.'
    },
    {
      name: 'Alexa Boo',
      position: 'CEO - LinkedIn',
      img: avatar2,
      content: 'Actually it was a great experience working with Oweeb.'
    },
    {
      name: 'John Doe',
      position: 'CTO - Shopify',
      img: avatar3,
      content: 'Actually it was a great experience working with Oweeb.'
    },
    {
      name: 'Ahmad',
      position: 'Software Engineer - Spotify',
      img: avatar4,
      content: 'Actually it was a great experience working with Oweeb.'
    },
    {
      name: 'Junathan',
      position: 'Tech Lead - Airbnb',
      img: avatar5,
      content: 'Actually it was a great experience working with Oweeb.'
    }
  ];
  const renderFeedbacks = feedbacks.map((feedback, index) => (
    <TestimonialCard feedback={feedback} key={index} />
  ));
  return (
    <section className="px-4 md:my-32">
      <SectionTitle
        title="Our lovely clients"
        caption="feedbacks of some clients that trusted our process"
      />
      <div className="mt-16 flex gap-3 justify-center flex-wrap">{renderFeedbacks}</div>
    </section>
  );
};

export default withAnimation(Testimonials);
