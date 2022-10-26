import SectionTitle from 'components/SectionTitle';
import React from 'react';
import ServiceCard from './ServiceCard';
import DocumentMagnifyingGlassIcon from '@heroicons/react/20/solid/DocumentMagnifyingGlassIcon';
import CommandLineIcon from '@heroicons/react/20/solid/CommandLineIcon';
import ServerStack from '@heroicons/react/20/solid/ServerStackIcon';
import withAnimation from 'HOCs/withAnimation';

const WorkProcess = () => {
  const services = [
    {
      icon: <DocumentMagnifyingGlassIcon className="w-6 text-light" />,
      title: 'Case Study',
      caption:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      icon: <CommandLineIcon className="w-6 text-light" />,
      title: 'Development',
      caption:
        ' Nunc faucibus aliquam justo vitae ultrices. Quisque condimentum ullamcorper tincidunt'
    },
    {
      icon: <ServerStack className="w-6 text-light" />,
      title: 'Deployment',
      caption:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];
  const renderServices = services.map(({ icon, title, caption }, index) => (
    <ServiceCard icon={icon} title={title} caption={caption} key={index} />
  ));

  return (
    <section className="md:my-32">
      <SectionTitle title="More Services To" />
      <SectionTitle
        title="Reach Your Audience"
        caption="Aliquam et nulla ut massa hendrerit bibendum"
      />
      <div className="mt-16">
        <div className="flex gap-6 p-4 justify-center flex-wrap md:w-7/12 md:mx-auto md:flex-nowrap">
          {renderServices}
        </div>
      </div>
    </section>
  );
};

export default withAnimation(WorkProcess);
