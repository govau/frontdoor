import * as React from 'react'
// import { Global, css } from '@emotion/core'
// import normalize from '../styles/normalize'


interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    {/* <Global styles={() => css(normalize)} /> */}
    <div className={className}>{children}</div>
  </>
)

export default LayoutRoot
