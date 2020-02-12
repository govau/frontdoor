import React from 'react';
import Feedback from '../components/Feedback';
import DefaultLayout from '../layouts/defaultLayout';

const FeedbackPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-sm-12">
          <Feedback />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FeedbackPage;
