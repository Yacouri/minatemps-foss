import React from 'react';
import microsoft from 'assets/images/microsoft.png';
import airbnb from 'assets/images/airbnb.png';
import hub from 'assets/images/hub.png';
import tinder from 'assets/images/tinder.png';
import facebook from 'assets/images/facebook.png';
import SectionTitle from 'components/SectionTitle';
import withAnimation from 'HOCs/withAnimation';

const Companies = () => {
  const featuredCompanies = [facebook, airbnb, tinder, microsoft, hub];
  const renderCompanies = featuredCompanies.map((company, index) => (
    <div key={index}>
      <img className="" src={company} alt={company.fileName} key={index} />
    </div>
  ));

  return (
    <section className="md:my-32">
      <SectionTitle title="As featured In" caption="Pellentesque venenatis scelerisque" />
      <p className="text-gray-500 text-center max-w-xl mx-auto leading-relaxed">
        As featured in the following companies
      </p>
      <div className="flex items-center justify-center flex-wrap gap-11 mt-12 md:flex-nowrap">
        {renderCompanies}
      </div>
    </section>
  );
};

export default withAnimation(Companies);
