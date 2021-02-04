import React from 'react';
import NavBar from '../components/atoms/NavBar/NavBar';
import styled from 'styled-components';
import lockIcon from '../assets/icons/lock.svg';
import ToggledMenu from '../components/atoms/NavBar/ToggledMenu';

const StyledWrapper = styled.div`
  position: absolute;
  margin-top: 0px;
  margin-left: 10%;

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 30px;
  }
`;

class LoggedUserView extends React.Component {
  state = {
    isMenuOpen: false,
  };

  handleMenuClick = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <NavBar />
        <ToggledMenu handleClick={this.handleMenuClick} isMenuOpen={this.state.isMenuOpen} />
        <StyledWrapper onClick={this.closeMenu}>{children}</StyledWrapper>
      </>
    );
  }
}

export default LoggedUserView;
