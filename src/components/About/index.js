import SectionTitle from 'components/SectionTitle';
import React from 'react';
import mesh1 from 'assets/images/mesh1.png';
import mesh2 from 'assets/images/mesh2.png';
import mesh3 from 'assets/images/mesh3.png';
import AboutCard from './AboutCard';
import withAnimation from 'HOCs/withAnimation';

const About = () => {
  const infos = [
    {
      title: 'Our Mission',
      caption:
        'Fusce vitae nisi sed risus facilisis faucibus. Ut posuere diam neque, eu euismod est convallis sed. Proin nisl eros, imperdiet in velit sed, consequat lacinia massa. Nunc faucibus',
      img: mesh1,
      reversed: false
    },
    {
      title: 'Our Vision',
      caption:
        'Pellentesque vel euismod purus. Fusce placerat vestibulum euismod. Vestibulum nibh augue, ultrices gravida libero ut, pellentesque lacinia libero. Vivamus eget aliquet eros, id porttitor',
      img: mesh2,
      reversed: true
    },
    {
      title: 'Our History',
      caption:
        'Porta risus sit amet, porta velit. Aenean scelerisque placerat ante ut ultrices. Nam vel aliquet lorem. Nunc condimentum tincidunt augue, et tincidunt massa fringilla at.',
      img: mesh3,
      reversed: false
    }
  ];
  const renderInfos = infos.map(({ title, caption, img, reversed }, index) => (
    <AboutCard title={title} caption={caption} img={img} reversed={reversed} key={index} />
  ));

  return (
    <section className="md:my-32">
      <SectionTitle title="Know More" caption="Integer consectetur at eros sed ultrices." />
      <div className="flex flex-col gap-10 w-full mx-auto p-12 md:px-0 md:w-7/12">
        {renderInfos}
      </div>
    </section>
  );
};

export default withAnimation(About);
