import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section id={id} className="py-24 px-8 max-w-7xl mx-auto">
      {children}
    </section>
  );
};

export default Section;
