import React from 'react';
import thumbnail from 'assets/images/thumb.png';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import withAnimation from 'HOCs/withAnimation';

const Thumb = () => {
  const openVideoTab = () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    window.open(url, '_blank');
  };
  return (
    <section className="my-4 p-4 md:my-32">
      <div className="relative cursor-pointer" onClick={openVideoTab}>
        <img
          className="mx-auto w-auto block transition-all hover:scale-[1.05] md:max-w-6xl"
          src={thumbnail}
          alt="thumbnail"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayCircleIcon className="w-12" color="black" />
        </div>
      </div>
    </section>
  );
};

export default withAnimation(Thumb);
