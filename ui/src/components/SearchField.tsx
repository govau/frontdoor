import AUbutton from '@gov.au/buttons';
import React, { useRef, useState } from 'react';

export interface ISearchResult {
  text: string;
  metadata: any;
}

interface ISearchFieldProps {
  searchFunc: (text: string) => Promise<any>;
  clearFunc?: () => void;
  itemSelectedFunc?: (item: any) => void;
  list: ISearchResult[];
  label: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({ itemSelectedFunc, searchFunc, label, list }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [modalVisible, setModalVisibility] = useState(false);
  const [searchingVisible, setSearchingVisible] = useState(false);
  let timer: any = null;

  const search = (field?: HTMLInputElement | null): Promise<any> => {
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
      clearTimeout(timer);
    }
    switch (e.key) {
      case 'Escape':
        setModalVisibility(false);
        break;
      case 'Enter':
        search(inputEl.current);
        break;
      default:
        timer = setTimeout(() => {
          search(inputEl.current);
        }, 1000);
        break;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div
            role="search"
            aria-label="field"
            className="au-search au-search--icon"
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
              <button className="au-btn" onClick={() => search(inputEl.current)}>
                <span className="au-search__submit-btn-text">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className={`modal ${modalVisible ? 'modal-visible' : ''}`} onClick={() => setModalVisibility(false)}></div>
          <div className="search-field">
            <div className={`search-field-float-box ${modalVisible ? 'search-field-float-box-shown' : ''}`}>
              {searchingVisible ?
                <>Searching...</> : (
                  list && list.map((l, i) => (
                    <div key={i}>
                      <AUbutton
                        block
                        onClick={() => {
                          if (itemSelectedFunc) {
                            itemSelectedFunc(l);
                          }
                          setModalVisibility(false);
                        }}
                        as="tertiary">
                        {l.text}
                      </AUbutton>
                    </div>
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
