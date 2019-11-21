import * as React from 'react';

interface IPageProps {
  className?: string;
}

const Page: React.FC<IPageProps> = ({ children, className }) => <div className={className}>{children}</div>;

export default Page;
