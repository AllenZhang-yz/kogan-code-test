import React from 'react';
import styled from 'styled-components';
import koganLogo from '../assets/images/koganLogo.png';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const LogoWrapper = styled.div`
  width: 150px;
  height: auto;
  margin-right: 20px;
`;
const Logo = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #ffff57;
  font-size: 2em;
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={koganLogo} alt="Kogan Logo" />
      </LogoWrapper>
      <Text>Code Challenge</Text>
    </HeaderWrapper>
  );
};

export default Header;
