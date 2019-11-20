import * as React from 'react'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <div className={className}>{children}</div>

export default Container
