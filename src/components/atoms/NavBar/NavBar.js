import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { browserHistory } from 'react-router';
import logo from '../../../assets/images/Logo.png';
import IconButton from '../IconButton/IconButton';
import accountIcon from '../../../assets/icons/account.svg';
import billIcon from '../../../assets/icons/bills.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import { useAuth } from '../../../contexts/AuthContext';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0px;
  height: 100vh;
  width: 7vw;
  background-color: ${({ theme }) => theme.orange};
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const StyledLogo = styled(NavLink)`
  position: block;
  width: 100%;
  height: 10vh;
  background-image: url(${logo});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-bottom: 20vh;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(IconButton)`
  margin-top: auto;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
`;

const NavBar = () => {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch {
      console.log('Failed to logout');
    }
  }

  return (
    <StyledWrapper>
      <StyledLogo to="/" />
      <StyledLinksList>
        <li>
          <IconButton as={NavLink} exact to="/" icon={accountIcon} activeclass="active" />
        </li>
        <li>
          <IconButton as={NavLink} to="/files" icon={billIcon} activeclass="active" />
        </li>
        <li>
          <IconButton as={NavLink} to="/contact" icon={phoneIcon} activeclass="active" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton onClick={handleLogout} icon={logoutIcon} />
    </StyledWrapper>
  );
};

export default NavBar;
