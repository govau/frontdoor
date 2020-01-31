import AUbutton from '@gov.au/buttons';
import React, { useEffect, useState } from 'react';

interface IOption {
  key: string;
  text: string;
}

interface IToggleButtonProps {
  optionSelectedFunc?: (option: IOption) => void;
  initialKey: string;
  options: IOption[];
}

const ToggleButton: React.FC<IToggleButtonProps> = ({optionSelectedFunc, options, initialKey}) => {
  const [selectedOption, setSelectedOption] = useState<IOption>();

  const selected = (option: IOption) => {
    setSelectedOption(option);
    if (optionSelectedFunc) {
      optionSelectedFunc(option);
    }
  };

  useEffect(() => {
    if (initialKey) {
      setSelectedOption(options.find((o) => o.key === initialKey));
    }
  }, [initialKey]);

  const getButtonStyle = (i: number, a: IOption[]): string => {
    if (i === 0 ) {
      return 'border-radius-left';
    } else if (a.length - 1 === i) {
      return 'border-radius-right';
    } else {
      return 'border-radius-none';
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          {options.map((o, i, a) => (
            <AUbutton
              className={getButtonStyle(i, a)}
              onClick={() => selected(o)}
              as={o.key === selectedOption?.key ? 'primary' : 'secondary'}>
                {o.text}
            </AUbutton>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
