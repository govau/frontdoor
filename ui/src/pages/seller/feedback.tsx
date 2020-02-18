import React from 'react';
import Feedback from '../../components/Feedback';
import SellerLayout from '../../layouts/sellerLayout';

const FeedbackPage: React.FC = () => {
  return (
    <SellerLayout>
      <div className="container margin-md-top-3 margin-md-bottom-3">
        <div className="row">
          <div className="col-sm-12">
            <Feedback />
          </div>
        </div>
      </div>
    </SellerLayout>
  );
};

export default FeedbackPage;
