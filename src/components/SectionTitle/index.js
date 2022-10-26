import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, caption }) => {
  return (
    <div className="mx-auto">
      <h1 className="section-title">{title}</h1>
      {caption && <p className="section-caption w-8/12">{caption}</p>}
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string
};
