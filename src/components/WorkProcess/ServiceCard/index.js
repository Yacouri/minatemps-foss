import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, caption }) => {
  return (
    <div className="card flex justify-center flex-col w-full md:w-1/3 md:items-center">
      <div className="flex items-center justify-center w-16 h-16 border border-light rounded-full">
        {icon}
      </div>
      <h3 className="text-light font-medium text-xl mt-2 md:text-center">{title}</h3>
      <div className="mt-4">
        <p className="text-obsidian md:text-center">{caption}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  caption: PropTypes.string
};
