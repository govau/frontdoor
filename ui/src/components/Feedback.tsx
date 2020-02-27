import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import AUpageAlert from '@gov.au/page-alerts';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import ToggleButton, { IOption } from './ToggleButton';


interface IFeedback {
  ease: number;
  suggestedImprovement: string;
  email: string;
}

interface IFeedbackProps {
  onCancel?: () => void;
}

const Feedback: React.FC<IFeedbackProps> = ({onCancel}) => {
  const [selectedEase, setSelectedEase] = useState<string>('1');
  const [email, setEmail] = useState<string>('');
  const [suggestedImprovement, setSuggestedImprovement] = useState<string>('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  const postFeedback = (feedback: IFeedback): Promise<AxiosResponse<any>> => {
    if (feedback) {
      return axios.post('/api/feedback', feedback).then((r) => {
        clearFeedback();
        setFeedbackSubmitted(true);
        return r;
      });
    }
    return Promise.reject();
  };

  const prepareFeedback = (formData: FormData) => {
    const feedback: IFeedback = {
      ease: parseInt(selectedEase, 10),
      email: `${formData.get('email')}`,
      suggestedImprovement: `${formData.get('suggestedImprovement')}`,
    };
    postFeedback(feedback);
  };

  const clearFeedback = () => {
    setSelectedEase('1');
    setSuggestedImprovement('');
    setEmail('');
  };

  const onCancelClick = () => {
    clearFeedback();
    if (onCancel) {
      onCancel();
    }
  };

  const toggleSelected = (option: IOption) => {
    setSelectedEase(option.key);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      prepareFeedback(new FormData(e.currentTarget));
    }}>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="xl" level="1">
            Feedback
          </AUheading>
        </div>
      </div>
      {feedbackSubmitted ? (
        <div className="row margin-sm-top-2 margin-md-top-2">
          <div className="col-xs-12 col-sm-6">
            <AUpageAlert as="success">
              <h3>Feedback submitted successful</h3>
              <p>Your feedback has been successfully submitted.</p>
              <div className="margin-sm-top-1 margin-md-top-1">
                <AUbutton onClick={() => onCancelClick()}>Return</AUbutton>
              </div>
            </AUpageAlert>
          </div>
        </div>
      ) : (
        <>
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-12">
              <AUheading size="sm" level="2">
                How was your experience finding the information you needed?
              </AUheading>
            </div>
          </div>
          <div className="row margin-sm-top-1 margin-md-top-05">
            <div className="col-sm-12">
              <ToggleButton
                options={[{
                  imgComponent: <img src={`/feedback/easy${selectedEase === '1' ? '-inverse' : ''}.svg`}/>,
                  key: '1',
                  text: 'Easy',
                }, {
                  imgComponent: <img src={`/feedback/ok${selectedEase === '2' ? '-inverse' : ''}.svg`}/>,
                  key: '2',
                  text: 'Okay',
                }, {
                  imgComponent: <img src={`/feedback/difficult${selectedEase === '3' ? '-inverse' : ''}.svg`}/>,
                  key: '3',
                  text: 'Difficult',
                }]}
                initialKey="1"
                optionSelectedFunc={toggleSelected}
              />
            </div>
          </div>
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-12">
              <label htmlFor="suggestedImprovement">
                <AUheading size="sm" level="2">How would you improve this experience?</AUheading>
              </label>
              <textarea
                className="au-text-input au-text-input--block margin-sm-top-05 margin-md-top-05"
                id="suggestedImprovement"
                name="suggestedImprovement"
                onChange={(e) => setSuggestedImprovement(e.target.value)}
                value={suggestedImprovement}
                autoComplete="off">
              </textarea>
            </div>
          </div>
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-12">
              <label htmlFor="email">
                <AUheading size="sm" level="2">Email address (optional)</AUheading>
                Supply your email address if you want to be followed up about this feedback.
              </label>
              <input
                className="au-text-input au-text-input--block margin-sm-top-05 margin-md-top-05"
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
          </div>
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-12">
              <AUbutton className="margin-sm-right-1 margin-md-right-1" type="submit">Send feedback</AUbutton>
              <AUbutton as="secondary" onClick={() => onCancelClick()}>Cancel feedback</AUbutton>
            </div>
          </div>
        </>
    )}
    </form>
  );
};

export default Feedback;
