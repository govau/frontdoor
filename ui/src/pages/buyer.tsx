import React from 'react';
import BuyerChat from '../components/BuyerChat';
import DefaultLayout from '../layouts/defaultLayout';

const BuyerPage: React.FC = () => {
  return (
    <DefaultLayout>
      {'Buying digital products & services'}
      <BuyerChat />
    </DefaultLayout>
  );
};

export default BuyerPage;
