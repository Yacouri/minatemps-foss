import About from 'components/About';
import Companies from 'components/Companies';
import Cta from 'components/Cta';
import Faqs from 'components/Faqs';
import Hero from 'components/Hero';
import Testimonials from 'components/Testimonials';
import Thumb from 'components/Thumb';
import WorkProcess from 'components/WorkProcess';
import MainLayout from 'layouts';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_CODE);
    const trackPage = (page) => {
      ReactGA.set({ page });
      ReactGA.pageview(page);
    };
    const page = window.location.pathname + window.location.search;
    trackPage(page);
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Thumb />
      <WorkProcess />
      <About />
      <Companies />
      <Testimonials />
      <Cta />
      <Faqs />
    </MainLayout>
  );
};

export default App;
