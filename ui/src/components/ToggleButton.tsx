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

  return (
    <div className="toggle-button">
      {options.map((o, i) => (
        <AUbutton
          key={i}
          onClick={() => selected(o)}
          as={o.key === selectedOption?.key ? 'primary' : 'secondary'}>
            {o.text}
        </AUbutton>
      ))}
    </div>
  );
};

export default ToggleButton;
