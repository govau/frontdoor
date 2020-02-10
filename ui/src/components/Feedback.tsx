import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import ToggleButton, { IOption } from './ToggleButton';


interface IFeedback {
  ease: number;
  suggestedImprovement: string;
  email: string;
}

const Feedback: React.SFC = () => {
  const [selectedEase, setSelectedEase] = useState<string>('1');
  const [email, setEmail] = useState<string>('');
  const [suggestedImprovement, setSuggestedImprovement] = useState<string>('');

  const postFeedback = (feedback: IFeedback): Promise<AxiosResponse<any>> => {
    if (feedback) {
      return axios.post('/api/feedback', feedback).then((r) => {
        clearFeedback();
        return r;
      });
    }
    return Promise.reject();
  };

  const prepareFeedback = () => {
    if (email && suggestedImprovement) {
      const feedback: IFeedback = {
        ease: parseInt(selectedEase, 10),
        email,
        suggestedImprovement,
      };
      postFeedback(feedback);
    }
  };

  const clearFeedback = () => {
    setSuggestedImprovement('');
    setEmail('');
  };

  const toggleSelected = (option: IOption) => {
    setSelectedEase(option.key);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="xl" level="1">
            Feedback
          </AUheading>
        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12">
          <AUheading size="md" level="2">
            How was your experience finding the information you needed?
          </AUheading>
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-12">
          <ToggleButton
            options={[{
              key: '1',
              text: 'Easy',
            }, {
              key: '2',
              text: 'Okay',
            }, {
              key: '3',
              text: 'Difficult',
            }]}
            initialKey="1"
            optionSelectedFunc={toggleSelected}
          />
        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12">
          <label htmlFor="suggestedImprovement">
            <AUheading size="sm" level="2">How would you improve this experience?</AUheading>
          </label>
          <textarea
            className="au-text-input au-text-input--block"
            id="suggestedImprovement"
            onChange={(e) => setSuggestedImprovement(e.target.value)}
            value={suggestedImprovement}
            autoComplete="off"
            required>
          </textarea>
        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12">
          <label htmlFor="email">
            <AUheading size="sm" level="2">Email address (optional)</AUheading>
            Supply your email address if you want to be followed up about this feedback.
          </label>
          <input
            className="au-text-input au-text-input--block"
            name="text-input-block"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />

        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12">
          <AUbutton className="margin-right-1" onClick={() => prepareFeedback()}>Send feedback</AUbutton>
          <AUbutton as="secondary" onClick={() => clearFeedback()}>Cancel feedback</AUbutton>
        </div>
      </div>
    </>
  );
};

export default Feedback;
