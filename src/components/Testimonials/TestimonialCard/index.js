import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ feedback }) => {
  return (
    <div className="card flex flex-col gap-6 w-full shadow rounded-xl md:w-1/5">
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 border border-light rounded-full"
          src={feedback.img}
          alt={feedback.position}
        />
        <div>
          <p className="font-bold text-light">{feedback.name}</p>
        </div>
      </div>
      <div>
        <p className="text-obsidian">{feedback.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

TestimonialCard.propTypes = {
  feedback: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    img: PropTypes.any,
    content: PropTypes.string
  })
};
