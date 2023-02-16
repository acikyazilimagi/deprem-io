import React, { PropsWithChildren } from 'react';

import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import KVKKStickyBar from '@/components/kvkk-sticky-bar';

type LayoutMainPropsType = PropsWithChildren<{}>;

const LayoutMain = ({ children }: LayoutMainPropsType) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <KVKKStickyBar />
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default LayoutMain;

LayoutMain.displayName = 'LayoutMain';
