import Navbar from 'components/Navbar';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.oneOf([PropTypes.node], PropTypes.node)
};
