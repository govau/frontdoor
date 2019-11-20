import * as React from 'react'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <main className={className}>{children}</main>
)

export default LayoutMain
