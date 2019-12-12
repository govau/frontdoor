import React from 'react';
import BuyerChat from '../components/BuyerChat';
import DefaultLayout from '../layouts/defaultLayout';

const BuyerPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BuyerChat />
    </DefaultLayout>
  );
};

export default BuyerPage;
