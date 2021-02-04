import React, { useState, useEffect } from 'react';
import LoggedUserView from '../templates/LoggedUserView';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Loader from '../components/atoms/Loader/Loader';

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 40px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 120px;
  }
`;
const StyledHeadLine = styled.div`
  padding: 0px 5px;
  margin-top: 5px;
`;

const StyledPharagraphWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 15px;
  }
`;
const StyledParagraphColumn = styled.div`
  margin: 0px 60px;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 0px 20px;
  }
`;

const StyledPharagraph = styled(Paragraph)`
  display: flex;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
  }
`;
const StyledText = styled(Heading)`
  margin: 0;
  padding: 0;
  display: inline-block;
  padding-left: 10px;
  font-size: 26px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;
const StyledMonthText = styled(Heading)`
  margin: 0;
  padding: 0;
  display: inline-block;
  padding-left: 10px;
  font-size: 26px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 18px;
  }
`;

const StyledBoardWrapper = styled.div`
  display: flex;
  width: 85vw;
  justify-content: center;
`;

const StyledBoard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 570px;
  height: 380px;
  background-color: ${({ theme }) => theme.orange};
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 30px;
    height: 330px;
  }
`;

const StyledMonthHeader = styled.div`
  margin-top: 30px;
  display: flex;
  width: 140px;
  height: 30px;
  justify-content: center;
`;

const SaldoView = ({ payments, uid }) => {
  const [month, setMonth] = useState('');
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (payments) {
      payments.map((user) => {
        if (user.id === uid) {
          setUserData(user);
          setLoading(false);
        }
        if (user.id === 'month') {
          setMonth(user.miesiac);
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
        <StyledWrapper>
          <StyledHeadLine>
            <StyledText>NAJEMCA:</StyledText>
            <StyledText bold>{userData.najemca}</StyledText>
          </StyledHeadLine>
          <StyledHeadLine>
            <StyledText>MIESZKANIE:</StyledText>
            <StyledText bold>{userData.mieszkanie}</StyledText>
          </StyledHeadLine>
          <StyledBoardWrapper>
            <StyledBoard>
              <StyledMonthHeader>
                <StyledMonthText semi>{month}</StyledMonthText>
              </StyledMonthHeader>
              <StyledPharagraphWrapper>
                <StyledParagraphColumn>
                  <StyledPharagraph>kwota najmu</StyledPharagraph>
                  <StyledPharagraph>prąd</StyledPharagraph>
                  <StyledPharagraph>gaz</StyledPharagraph>
                  <StyledPharagraph>woda</StyledPharagraph>
                  <StyledPharagraph>wywóz odpadów</StyledPharagraph>
                  <StyledPharagraph bold>suma</StyledPharagraph>
                </StyledParagraphColumn>
                <StyledParagraphColumn>
                  <StyledPharagraph>{userData.kwotaNajmu} zł</StyledPharagraph>
                  <StyledPharagraph>{userData.prad} zł</StyledPharagraph>
                  <StyledPharagraph>{userData.gaz} zł</StyledPharagraph>
                  <StyledPharagraph>{userData.woda} zł</StyledPharagraph>
                  <StyledPharagraph>{userData.smieci} zł</StyledPharagraph>
                  <StyledPharagraph bold>
                    {Number(
                      (
                        userData.kwotaNajmu +
                        userData.prad +
                        userData.gaz +
                        userData.woda +
                        userData.smieci
                      ).toFixed(2),
                    )}{' '}
                    zł
                  </StyledPharagraph>
                </StyledParagraphColumn>
              </StyledPharagraphWrapper>
            </StyledBoard>
          </StyledBoardWrapper>
        </StyledWrapper>
      )}
    </LoggedUserView>
  );
};

const mapStateToProps = (state) => {
  const { payments } = state.firestoreReducer.ordered;
  const { uid } = state.firebaseReducer.auth;
  return { payments, uid };
};
export default compose(connect(mapStateToProps), firestoreConnect(['payments']))(SaldoView);
