import React from 'react'
import Header from './_components/header/header';
import Wrapper from './_components/ui/wrapper';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Header />

      <Wrapper>
      {children}
      </Wrapper>
    </div>
  )
}

export default layout