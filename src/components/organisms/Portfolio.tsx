import React from 'react';
import Section from '../templates/Section';
import AccountAddress from '../molecules/AccountAddress';
import AccountBalance from '../molecules/AccountBalance';
import MetamaskLogo from '../../images/icn-metamask.svg';

interface Props {
  onAccountAddressClick: () => void;
}

function Portfolio({ onAccountAddressClick }: Props) {
  return (
    <div className="portfolio">
      <Section title="Address">
        <AccountAddress onClick={onAccountAddressClick} providerImg={MetamaskLogo}/>
      </Section>

      <Section title="Assets">
        <AccountBalance/>
      </Section>
    </div>
  );
};

export default Portfolio;