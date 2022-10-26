import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = ({ title, caption, img, reversed }) => {
  return (
    <div
      className={`flex items-center flex-wrap gap-10 md:flex-nowrap ${
        reversed && 'md:flex-row-reverse'
      }`}>
      <div className="w-full md:w-1/2">
        <h2 className="mb-4 text-3xl text-light ">{title}</h2>
        <p className="section-caption text-left">{caption}</p>
      </div>
      <div className="w-full md:w-1/2">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default AboutCard;

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  img: PropTypes.any,
  reversed: PropTypes.bool
};
