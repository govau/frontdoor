import React from 'react';
import Feedback from '../components/Feedback';
import DefaultLayout from '../layouts/defaultLayout';

const FeedbackPage: React.SFC = () => {
  return (
    <DefaultLayout>
      <div className="row margin-top-2 margin-bottom-2">
        <div className="col-sm-12">
          <Feedback />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FeedbackPage;
