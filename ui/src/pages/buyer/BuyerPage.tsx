import axios from 'axios';
// import { DirectLine } from 'botframework-directlinejs';
// import ReactWebChat from 'botframework-webchat';
import React, { useEffect, useRef, useState } from 'react';
import '../../main.scss';

const BuyerPage: React.FC = () => {
  // const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [qnas] = useState<any>([]);
  const inputEl = useRef(null);
  // const answers = useRef<any>([]);
  // const directLine = useRef<DirectLine | null>(null);
  useEffect(() => {
    const q = 'What level of government do you work for?';
    ask(q , {
      question: q,
    });
  });

  const ask = (text: string, question: any) => {
    setLoading(true);

    qnas.push({
      question: text,
    });
    axios.post('/api/answer', question)
    .then((r: any) => {
      qnas.push(r.data);
      setLoading(false);
    });
  };

  return (
    <div>
      {'Buying digital products & services'}
      <div role="search" aria-label="sitewide" className="au-search">
          <label htmlFor="standard" className="au-search__label">Search this website</label>
          <input type="search" id="standard" name="standard" className="au-text-input" ref={inputEl}/>
          <div className="au-search__btn">
              <button className="au-btn" onClick={() => {
                  if (inputEl.current) {
                    const search: any = inputEl.current;
                    if (search) {
                      ask(search.value, {
                        question: search.value,
                      });
                    }
                  }
                }}>
                <span className="au-search__submit-btn-text">
                  Search
                </span>
              </button>
          </div>
      </div>
      <div>
        {loading && 'Searching...'}
        {qnas && qnas.map((qna: any) => (
          <>
            {qna.question && (
              <div className="row">
                <div className="col-md-7 margin-bottom-1 background-light-grey">
                  {qna.question}
                </div>
              </div>
            )}
            {qna.answers && qna.answers.map((a: any) => (
              <div className="row">
                <div className="col-md-push-5 col-md-7 margin-bottom-1 background-blue text-colour-white">
                  <div>{a.answer}</div>
                  {a.context && (
                    <div>
                      {a.context.prompts && a.context.prompts.map((p: any) => (
                        <button className="au-btn" data-id={p.qnaId} data-displaytext={p.displayText} onClick={(e: any) => {
                          ask(e.target.dataset.displaytext, {
                            qnaId: e.target.dataset.id,
                          });
                        }}>
                          {p.displayText}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default BuyerPage;
