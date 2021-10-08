import React from 'react';

import { FooterDark } from './styles';
import Contact from '../Contact';

const Footer: React.FC = () => {
  return (
    <FooterDark>
      <Contact />

      {/* <div>
        Site version:&nbsp;
        <a
          href="https://github.com/christianwong/christianwong.dev/releases/tag/##RELEASE_TAG_NAME##"
          target="_blank"
          rel="noopener noreferrer"
        >
          ##RELEASE_TAG_NAME##
        </a>
      </div> */}
    </FooterDark>
  );
};

export default Footer;
