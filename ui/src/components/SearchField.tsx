import React, { useRef } from 'react';

interface ISearchFieldProps {
  searchFunc: (inputEl: React.MutableRefObject<null>) => void;
  clearFunc?: () => void;
  label: string;
}

const SearchField: React.FC<ISearchFieldProps> = ({ searchFunc, label }) => {
  const inputEl = useRef(null);

  return (
    <form
      role="search"
      aria-label="field"
      className="au-search au-search--icon"
      onSubmit={(e) => {
        e.preventDefault();
        searchFunc(inputEl);
        return false;
      }}
    >
      <label htmlFor="standard" className="au-search__label">{label}</label>
      <input type="search" id="standard" name="standard" className="au-text-input" ref={inputEl} />
      <div className="au-search__btn">
        <button className="au-btn">
          <span className="au-search__submit-btn-text">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchField;
