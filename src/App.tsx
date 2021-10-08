import React from 'react';

import GlobalStyle, { PlaceHolder } from './styles/global';

import ProfileHeader from './components/ProfileHeader';
import ProfileDescription from './components/ProfileDescription';
import Footer from './components/Footer';
// import BlogOverview from './components/BlogOverview';

const App: React.FC = () => {
  return (
    <>
      <PlaceHolder>
        <ProfileHeader />
        <ProfileDescription />
      </PlaceHolder>

      {/* <PlaceHolder>
        <BlogOverview />
      </PlaceHolder> */}

      <Footer />

      <GlobalStyle />
    </>
  );
};

export default App;
