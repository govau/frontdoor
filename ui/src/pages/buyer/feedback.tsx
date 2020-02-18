import React from 'react';
import Feedback from '../../components/Feedback';
import BuyerLayout from '../../layouts/buyerLayout';

const FeedbackPage: React.FC = () => {
  return (
    <BuyerLayout>
      <div className="container margin-top-3 margin-bottom-3">
        <div className="row">
          <div className="col-sm-12">
            <Feedback />
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
};

export default FeedbackPage;
