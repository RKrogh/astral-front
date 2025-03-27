import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the examples page to avoid server/client mismatch
const ExamplesPage = dynamic(() => import('@/app/examples/page'), {
  ssr: false,
  loading: () => <div>Loading examples...</div>
});

const Examples: React.FC = () => {
  return (
    <div className="page-content">
      <ExamplesPage />
    </div>
  );
};

export default Examples; 