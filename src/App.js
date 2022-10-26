import About from 'components/About';
import Companies from 'components/Companies';
import Cta from 'components/Cta';
import Faqs from 'components/Faqs';
import Hero from 'components/Hero';
import Testimonials from 'components/Testimonials';
import Thumb from 'components/Thumb';
import WorkProcess from 'components/WorkProcess';
import MainLayout from 'layouts';
import React from 'react';

const App = () => {
  return (
    <MainLayout>
      <div className="App">
        <Hero />
        <Thumb />
        <WorkProcess />
        <About />
        <Companies />
        <Testimonials />
        <Cta />
        <Faqs />
      </div>
    </MainLayout>
  );
};

export default App;
