import AUbutton from '@gov.au/buttons';
import React, { useEffect, useState } from 'react';

export interface IOption {
  key: string;
  text: string;
}

interface IToggleButtonProps {
  optionSelectedFunc?: (option: IOption) => void;
  initialKey: string;
  options: IOption[];
}

const ToggleButton: React.FC<IToggleButtonProps> = ({ optionSelectedFunc, options, initialKey }) => {
  const [selectedOption, setSelectedOption] = useState<IOption>();

  const selected = (option: IOption) => {
    setSelectedOption(option);
    if (optionSelectedFunc) {
      optionSelectedFunc(option);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      const option = options.find((o) => o.key === e.target.value);
      if (option) {
        selected(option);
      }
    }
  };

  useEffect(() => {
    if (initialKey) {
      setSelectedOption(options.find((o) => o.key === initialKey));
    }
  }, [initialKey]);

  return (
    <>
      <div className="toggle-button hide-sm">
        {options.map((o, i) => (
          <AUbutton
            key={i}
            onClick={() => selected(o)}
            as={o.key === selectedOption?.key ? 'primary' : 'secondary'}>
            {o.text}
          </AUbutton>
        ))}
      </div>
      <div className="hide-md">
        <select className="au-select" onChange={onChange}>
          {options.map((o, i) => (
              <option key={i} value={o.key}>{o.text}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ToggleButton;
