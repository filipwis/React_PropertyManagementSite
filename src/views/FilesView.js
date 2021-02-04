import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoggedUserView from '../templates/LoggedUserView';
import styled from 'styled-components';
import pdfIcon from '../assets/icons/pdf.svg';
import Heading from '../components/atoms/Heading/Heading';
import { compose } from 'redux';
import Loader from '../components/atoms/Loader/Loader';

const StyledHeading = styled(Heading)`
  margin-top: 10vh;
  font-size: 36px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 150px;
    color: ${({ theme }) => theme.orange};
  }
`;

const StyledWrapper = styled.div`
  margin-top: 15vh;
  position: absolute;
  width: 85vw;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 10px;
  }
`;
const StyledLink = styled.a`
  padding-left: 65px;
  margin: 15px;
  background-position-x: 5%;
  display: flex;
  border: none;
  width: 470px;
  height: 25px;
  background-color: transparent;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  background-image: url(${pdfIcon});
  background-repeat: no-repeat;
  background-size: 25px 25px;
  align-content: center;
  text-justify: right;
  text-decoration: none;
  color: black;
  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px;
    padding-left: 35px;
    background-position-x: 0%;
    width: 350px;
    font-size: 16px;
  }
`;

const FilesView = ({ payments, uid }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (payments) {
      payments.map((user) => {
        if (user.id === uid) {
          setUserData(user);
          setLoading(false);
        }
      });
    }
  });
  return (
    <LoggedUserView>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StyledHeading>Pliki</StyledHeading>
          <StyledWrapper>
            <StyledLink href={userData.liczniki} target="_blank">
              Liczniki
            </StyledLink>
            <StyledLink href={userData.wplaty} target="_blank">
              Wpłaty
            </StyledLink>
            <StyledLink href={userData.odpady} target="_blank">
              Opłaty za odpady komunalne
            </StyledLink>
            <StyledLink href="\Harmonogram.pdf" target="_blank">
              Harmonogram wywozu odpadów
            </StyledLink>
          </StyledWrapper>
        </>
      )}
    </LoggedUserView>
  );
};

const mapStateToProps = (state) => {
  const { payments } = state.firestoreReducer.ordered;
  const { uid } = state.firebaseReducer.auth;
  console.log(payments);
  return { payments, uid };
};
export default compose(connect(mapStateToProps), firestoreConnect(['payments']))(FilesView);
