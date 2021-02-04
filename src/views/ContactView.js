import React from 'react';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import LoggedUserView from '../templates/LoggedUserView';
import IconButton from '../components/atoms/IconButton/IconButton';
import phoneIcon from '../assets/icons/phone.svg';
import emailIcon from '../assets/icons/send.svg';
import bankIcon from '../assets/icons/bank.svg';
import styled from 'styled-components';

const StyledHeading = styled(Heading)`
  margin-top: 10vh;
  font-size: 36px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 150px;
    color: ${({ theme }) => theme.orange};
  }
`;

const StyledBoardWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  width: 85vw;
  justify-content: center;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 50px;
  }
`;

const StyledBoard = styled.div`
  position: relative;
  display: absolute;
  flex-direction: column;
  margin-top: 0px;
  width: 500px;
  height: 250px;
  background-color: ${({ theme }) => theme.orange};
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  text-align: center;
  justify-content: center;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 0px;
    width: 400px;
    height: 200px;
  }
`;

const StyledText = styled(Heading)`
  margin: 40px 0 22px;
  padding: 0;
  font-size: 26px;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 40px 0 10px;
    font-size: 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  display: flex;
  margin: 0px;
  padding: 0;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;

const StyledIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
  display: inline;
  background-position-y: 50%;
`;

const ContactView = () => (
  <LoggedUserView>
    <StyledHeading>Kontakt</StyledHeading>
    <StyledBoardWrapper>
      <StyledBoard>
        <StyledText>Filip Wiśniowski</StyledText>
        <StyledParagraph>
          <StyledIcon icon={phoneIcon} />
          605 580 707
        </StyledParagraph>
        <StyledParagraph>
          <StyledIcon icon={emailIcon} />
          wisniowskifilip@gmail.com
        </StyledParagraph>
        <StyledParagraph>
          <StyledIcon icon={bankIcon} />
          24 1020 4391 0000 6202 0173 6693
        </StyledParagraph>
      </StyledBoard>
    </StyledBoardWrapper>
  </LoggedUserView>
);

export default ContactView;
