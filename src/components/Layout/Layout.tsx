import { Box } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Box>
          <main> {children} </main>
        </Box>
      </div>
    </div>
  );
};

export default Layout;