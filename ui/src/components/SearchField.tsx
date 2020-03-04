import AUbutton from '@gov.au/buttons';
import React, { ReactNode, useRef, useState } from 'react';

export interface ISearchResult {
  text: string;
  metadata: any;
}

interface ISearchFieldProps {
  searchFunc: (text: string) => Promise<ISearchResult[]>;
  clearFunc?: () => void;
  itemSelectedFunc?: (item: ISearchResult) => void;
  list: ISearchResult[];
  id: string;
  notFoundComponent?: (search?: string) => React.ReactNode;
  helpComponent?: ReactNode;
}

const SearchField: React.FC<ISearchFieldProps> = ({ itemSelectedFunc, searchFunc, helpComponent, notFoundComponent, id, list }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const searchValue = useRef<string>('');
  const timer = useRef<any>(null);
  const [modalVisible, setModalVisibility] = useState(false);
  const [searchingVisible, setSearchingVisible] = useState(false);
  const [noData, setNoData] = useState(false);

  const search = (minCharacters: number, field?: HTMLInputElement | null): Promise<any> => {
    if (field) {
      if (modalVisible && searchValue?.current === field.value) {
        return Promise.resolve();
      } else if (field.value.length < minCharacters) {
        return Promise.resolve();
      }
      setModalVisibility(true);
      setSearchingVisible(true);
      searchValue.current = field.value;
      return searchFunc(field.value).then((data) => {
        field.focus();
        setSearchingVisible(false);
        return data;
      }).then((data) => {
        setNoData(data.length === 0 ? true : false);
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
        break;
      case 'Enter':
        search(0, inputEl.current);
        break;
      default:
        timer.current = setTimeout(() => {
          search(3, inputEl.current);
        }, 1000);
        break;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 z-index-5">
          <div
            role="search"
            aria-label="field"
            className="au-search au-search--icon"
          >
            <input
              type="search"
              id={id}
              className="au-text-input"
              autoComplete="off"
              ref={inputEl}
              onFocus={(e) => e.target.value && setModalVisibility(true)}
              onKeyUp={onKeyUp}
            />
            <div className="au-search__btn">
              <button className="au-btn" onClick={() => search(0, inputEl.current)}>
                <span className="au-search__submit-btn-text">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className={`modal ${modalVisible ? 'modal-visible' : ''} z-index-1`} onClick={() => setModalVisibility(false)}></div>
          <div className="search-field z-index-5">
            <div className={`search-field-float-box ${modalVisible ? 'search-field-float-box-shown' : ''} z-index-5`}>
              {searchingVisible ?
                <>Searching...</> : (
                  noData ?
                    notFoundComponent && notFoundComponent(inputEl?.current?.value)
                   : (
                    <>
                      {list && list.map((l, i) => (
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
                            <div className="text-align-left">{l.text}</div>
                          </AUbutton>
                        </div>
                      ))}
                      {helpComponent &&
                        <div className="background-light-grey margin-sm-top-05 margin-md-top-05 padding-sm-1 padding-md-2">
                          {helpComponent}
                        </div>
                      }
                    </>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchField;
