import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.orange};
  justify-content: center;

  @media ${({ theme }) => theme.device.mobile} and (orientation: landscape) {
    width: 100vw;
    height: 1000px;
  }
`;

const StyledLogo = styled.img`
  position: absolute;
  width: 350px;
  margin-top: 60px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 30px;
  }
`;

const StyledHeader = styled.div`
  margin-top: 150px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.regular};
  font-family: 'Montserrat', sans-serif;
  height: 30px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 140px;
  }
`;

const StyledBoardWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 85vw;
  justify-content: center;
`;

const StyledBoard = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 28vh;
  width: 530px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 200px;
  }
`;

const StyledBoardHeader = styled.div`
  margin-top: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
`;

const StyledInput = styled.input`
  margin-top: 40px;
  padding: 15px 30px;
  height: 40px;
  width: 270px;
  background-color: hsl(0, 0%, 90%);
  border: none;
  border-radius: 50px;

  ::placeholder {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const StyledError = styled.div`
  margin-top: 10px;
  width: 250px;
  height: 25px;
  font-size: 14px;
  text-align: center;
  color: red;
  font-weight: ${({ theme }) => theme.semiBold};
`;

const StyledButton = styled.button`
  margin-top: 10px;
  width: 140px;
  height: 40px;
  background-color: ${({ theme }) => theme.orange};
  border: none;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.medium};
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
`;

const LoginView = () => {
  const { signin } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  return (
    <StyledWrapper>
      <StyledLogo src={logo} />
      <StyledHeader>Serwis administracyjny</StyledHeader>
      <StyledBoardWrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async ({ email, password }) => {
            try {
              await signin(email, password);
              history.push('/');
            } catch (err) {
              setError('Niepoprawny e-mail lub hasło.');
            }
          }}
        >
          {({ handleChange, handleBlur, values }) => {
            return (
              <StyledBoard autoComplete="off">
                <StyledBoardHeader>zaloguj się</StyledBoardHeader>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  required
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Hasło"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                />
                <StyledError>{error}</StyledError>
                <StyledButton type="submit">Zaloguj się</StyledButton>
              </StyledBoard>
            );
          }}
        </Formik>
      </StyledBoardWrapper>
    </StyledWrapper>
  );
};

export default LoginView;
