import * as React from 'react'

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <div className={className}>{children}</div>

export default Page
