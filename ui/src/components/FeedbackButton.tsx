import AUbutton from '@gov.au/buttons';
import React, { useState } from 'react';
import Feedback from './Feedback';


interface IFeedbackButtonProps {
  title?: string;
}

const FeedbackButton: React.FC<IFeedbackButtonProps> = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUbutton
            className="border-radius-bottom-none"
            onClick={() => setOpened(!opened)}
            block>
            <div className="text-align-left">Send us feedback</div>
          </AUbutton>
        </div>
      </div>
      {opened && <div className="row">
        <div className="col-sm-12">
          <div className="background-white padding-2 border-1 border-width-1 border-light-grey">
            <Feedback onCancel={() => setOpened(false)} />
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default FeedbackButton;
