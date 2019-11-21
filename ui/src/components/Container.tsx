import * as React from 'react';

interface IContainerProps {
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => <div className={className}>{children}</div>;

export default Container;
