import React, { useRef, useState } from 'react';

interface ISearchFieldProps {
  searchFunc: (inputEl: string) => Promise<any>;
  clearFunc?: () => void;
  itemSelectedFunc?: (item: any) => void;
  list?: any[];
  label: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({ itemSelectedFunc, searchFunc, label, list }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [modalVisible, setModalVisibility] = useState(false);

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
                searchFunc(inputEl.current.value).then(() => {
                  inputEl?.current?.focus();
                });
              }
              return false;
            }}
          >
            <label htmlFor="standard" className="au-search__label">{label}</label>
            <input type="search" name="standard" className="au-text-input" ref={inputEl} onFocus={(e) => e.target.value && setModalVisibility(true)} onKeyUp={(e) => e.key === 'Escape' && setModalVisibility(false) } />
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
              <ul>
                {list && list.map((l: any) => (
                  <>
                    {l.answers && l.answers.map((a: any) => (
                      <li onClick={() => {
                        if (itemSelectedFunc) {
                          itemSelectedFunc(a);
                        }
                        setModalVisibility(false);
                      }}>{a.answer}</li>
                    ))}
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SearchField;
