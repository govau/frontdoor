import AUbutton from '@gov.au/buttons';
import React, { ReactNode } from 'react';

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
interface ISearchFieldState {
  modalVisible: boolean;
  searchingVisible: boolean;
  noData: boolean;
}

class SearchField extends React.Component<ISearchFieldProps, ISearchFieldState> {
  public inputEl: React.RefObject<HTMLInputElement>;
  public searchValue?: string;
  public timer?: any;

  constructor(props: ISearchFieldProps) {
    super(props);
    this.inputEl = React.createRef();
    this.state = {
      modalVisible: false,
      noData: false,
      searchingVisible: false,
    };
  }

  public setModalVisible(visible: boolean) {
    this.setState({
      modalVisible: visible,
    });
  }

  public search(minCharacters: number, field?: HTMLInputElement | null): Promise<any> {
    const {
      searchFunc,
    } = this.props;

    const {
      modalVisible,
    } = this.state;


    if (field) {
      if (modalVisible && this.searchValue === field.value) {
        return Promise.resolve();
      } else if (field.value.length < minCharacters) {
        return Promise.resolve();
      }
      this.setState({
        modalVisible: true,
        searchingVisible: true,
      });
      this.searchValue = field.value;
      return searchFunc(field.value).then((data: any) => {
        field.focus();
        this.setState({
          searchingVisible: false,
        });
        return data;
      }).then((data: any) => {
        this.setState({
          noData: data.length === 0 ? true : false,
        });
      });
    }
    return Promise.reject();
  }

  public onKeyUp(e: any) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    switch (e.key) {
      case 'Escape':
        this.setState({
          modalVisible: false,
        });
        break;
      case 'Enter':
        this.search(0, this.inputEl.current);
        break;
      default:
        this.timer = setTimeout(() => {
          this.search(3, this.inputEl.current);
        }, 1000);
        break;
    }
  }

  public render() {
    const {
      helpComponent,
      id,
      itemSelectedFunc,
      list,
      notFoundComponent,
    } = this.props;

    const {
      modalVisible,
      noData,
      searchingVisible,
    } = this.state;

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
                ref={this.inputEl}
                onFocus={(e) => {
                  if (e.target.value) {
                    this.setState({
                      modalVisible: true,
                    });
                  }
                }}
                onKeyUp={this.onKeyUp.bind(this)}
              />
              <div className="au-search__btn">
                <button className="au-btn" onClick={() => this.search(0, this.inputEl.current)}>
                  <span className="au-search__submit-btn-text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className={`modal ${modalVisible ? 'modal-visible' : ''} z-index-1`} onClick={() => {
              this.setState({
                modalVisible: false,
              });
            }}></div>
            <div className="search-field z-index-5">
              <div className={`search-field-float-box ${modalVisible ? 'search-field-float-box-shown' : ''} z-index-5`}>
                {searchingVisible ?
                  <>Searching...</> : (
                    noData ?
                      notFoundComponent && notFoundComponent(this.inputEl?.current?.value)
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
                                this.setState({
                                  modalVisible: false,
                                });
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
  }
}

export default SearchField;
