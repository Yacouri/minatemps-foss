import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid';

const FaqsCard = ({ faq, idx }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b border-secondary"
      key={idx}
      onClick={handleOpenAnswer}>
      <p className="text-light cursor-pointer pb-5 flex items-center justify-between text-lg">
        {faq.q}
        {state ? <MinusSmallIcon className="w-8" /> : <PlusSmallIcon className="w-8" />}
      </p>
      <div ref={answerElRef} className="duration-300" style={{ height: state ? answerH : '0px' }}>
        <div>
          <p className="text-gray-500">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;

FaqsCard.propTypes = {
  faq: PropTypes.shape({
    q: PropTypes.string,
    a: PropTypes.string
  }),
  idx: PropTypes.number
};
