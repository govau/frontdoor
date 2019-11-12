import axios from 'axios';
// import { DirectLine } from 'botframework-directlinejs';
// import ReactWebChat from 'botframework-webchat';
import React, { useEffect, useRef, useState } from 'react';
import '../../main.scss';

const BuyerPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [answers, setAnswers] = useState([]);
  const inputEl = useRef(null);
  // const directLine = useRef<DirectLine | null>(null);
  useEffect(() => {
    if (!loaded) {
      // axios.get('/api/BotConnector')
      //   .then((r) => {
      //     // directLine.current = new DirectLine({ token: r.data.token });
      //     setLoaded(true);
      //   });
    }
  });

  return (
    <div>
      {'Buying digital products & services'}
      {/* {loaded && <ReactWebChat directLine={directLine.current} />} */}
      <div role="search" aria-label="sitewide" className="au-search">
          <label htmlFor="standard" className="au-search__label">Search this website</label>
          <input type="search" id="standard" name="standard" className="au-text-input" ref={inputEl}/>
          <div className="au-search__btn">
              <button className="au-btn" type="submit"><span className="au-search__submit-btn-text" onClick={() => {
                if (inputEl.current) {
                  const search: any = inputEl.current;
                  if (search) {
                    axios.post('/api/answer', {
                      question: search.value,
                    })
                    .then((r) => {
                      // directLine.current = new DirectLine({ token: r.data.token });
                      setAnswers(r.data.answers.map((a: any) => a.answer));
                      
                      setLoaded(true);
                    });
                  }
                }
                
              }}>Search</span></button>
          </div>
      </div>
      <div>
        {answers && answers.map((a: any) => <p>{a}</p>)}
      </div>
    </div>
  );
};

export default BuyerPage;
