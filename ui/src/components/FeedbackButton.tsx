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
          <button className="border-radius-bottom-none au-btn au-btn--block" onClick={() => setOpened(!opened)}>
            <div className="text-align-left">Send us feedback</div>
          </button>
        </div>
      </div>
      {opened && <div className="row">
        <div className="col-sm-12">
          <div className="background-white padding-md-2 border-1 border-width-1 border-light-grey">
            <Feedback onCancel={() => setOpened(false)} />
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default FeedbackButton;
