import AUbutton from '@gov.au/buttons';
import React, { useRef, useState } from 'react';


interface ISearchFieldProps {
  searchFunc: (text: string) => Promise<any>;
  clearFunc?: () => void;
  itemSelectedFunc?: (item: any) => void;
  list?: any[];
  label: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({ itemSelectedFunc, searchFunc, label, list }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [modalVisible, setModalVisibility] = useState(false);
  const [searchingVisible, setSearchingVisible] = useState(false);
  const timer = useRef<any>(null);

  const search = (field?: HTMLInputElement): Promise<any> => {
    setModalVisibility(true);
    if (field) {
      setSearchingVisible(true);
      return searchFunc(field.value).then(() => {
        field.focus();
        setSearchingVisible(false);
      });
    }
    return Promise.reject();
  };

  const onKeyUp = (e: any) => {
    if (timer) {
      clearTimeout(timer.current);
    }
    switch (e.key) {
      case 'Escape':
        setModalVisibility(false);
      default:
        timer.current = setTimeout(() => {
          if (inputEl && inputEl.current) {
            search(inputEl.current);
          }
        }, 1000);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <form
            role="search"
            aria-label="field"
            className="au-search au-search--icon"
            onSubmit={(e) => {
              e.preventDefault();
              if (inputEl && inputEl.current) {
                search(inputEl.current);
              }
              return false;
            }}
          >
            <label htmlFor="standard" className="au-search__label">{label}</label>
            <input
              type="search"
              name="standard"
              className="au-text-input"
              autoComplete="off"
              ref={inputEl}
              onFocus={(e) => e.target.value && setModalVisibility(true)}
              onKeyUp={onKeyUp}
            />
            <div className="au-search__btn">
              <button className="au-btn">
                <span className="au-search__submit-btn-text">Search</span>
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className={`modal ${modalVisible ? 'modal-visible' : ''}`} onClick={() => setModalVisibility(false)}></div>
          <div className="search-field">
            <div className={`search-field-float-box ${modalVisible ? 'search-field-float-box-shown' : ''}`}>
              {searchingVisible ?
                <>Searching...</> : (
                  list && list.map((l: any) => (
                    l.answers && l.answers.map((a: any) => (
                      <div>
                        <AUbutton
                          onClick={() => {
                            if (itemSelectedFunc) {
                              itemSelectedFunc(a);
                            }
                          }}
                          as="tertiary">
                          {a.answer}
                        </AUbutton>
                      </div>
                    ))
                  ))
                )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SearchField;
