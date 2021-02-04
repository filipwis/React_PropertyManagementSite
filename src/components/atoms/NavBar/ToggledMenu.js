import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/images/Logo.png';
import toggledMenuIcon from '../../../assets/icons/toggledMenu.svg';
import accountIcon from '../../../assets/icons/account.svg';
import billIcon from '../../../assets/icons/bills.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import IconButton from '../IconButton/IconButton';

const StyledWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    display: block;
    width: 300px;
    height: 300px;
    z-index: 999;
  }
`;
const StyledLogoWrapper = styled.div`
  display: flex;
  padding-left: 13px;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: ${({ theme }) => theme.orange};
`;

const StyledLogo = styled(NavLink)`
  width: 250px;
  height: 90%;
  margin-left: 10px;
  background-size: 90%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position-y: 50%;
`;

const StyledMenuIcon = styled(IconButton)`
  width: 50px;
  height: 50px;
  background-size: 80%;
  border-radius: 0;
`;

const StyledMenuWrapper = styled.li`
  margin: 0px;
  padding: 0px;
  width: 250px;
  height: 202px;
  list-style: none;
  border-top: 0.5px solid;
`;

const StyledIcons = styled(IconButton)`
  margin-right: 8px;
`;

const StyledButton = styled.button`
  width: 250px;
  height: 49px;
  padding-left: 10px;
  background: ${({ theme }) => theme.orange};
  display: flex;
  color: black;
  border: none;
  border-bottom: 0.5px solid;
  align-items: center;
  font-weight: ${({ theme }) => theme.medium};
  font-size: 16px;
  text-decoration: none;
  border-radius: 2px;

  &.active {
    background-color: hsl(37, 100%, 66%);
  }
`;

const ToggledMenu = ({ isMenuOpen, handleClick }) => (
  <StyledWrapper>
    <StyledLogoWrapper>
      <StyledMenuIcon onClick={handleClick} icon={toggledMenuIcon} />
      <StyledLogo to="/" />
    </StyledLogoWrapper>
    {isMenuOpen && (
      <StyledMenuWrapper>
        <li>
          <StyledButton as={NavLink} exact to="/" activeclass="active">
            <StyledIcons icon={accountIcon} />
            PŁATNOŚCI
          </StyledButton>
        </li>
        <StyledButton as={NavLink} to="/files" activeclass="active">
          <StyledIcons icon={billIcon} />
          PLIKI
        </StyledButton>
        <StyledButton as={NavLink} to="/contact" activeclass="active">
          <StyledIcons icon={phoneIcon} />
          KONTAKT
        </StyledButton>
        <StyledButton as={NavLink} to="/login" activeclass="active">
          <StyledIcons icon={logoutIcon} />
          WYLOGUJ SIĘ
        </StyledButton>
      </StyledMenuWrapper>
    )}
  </StyledWrapper>
);

export default ToggledMenu;
