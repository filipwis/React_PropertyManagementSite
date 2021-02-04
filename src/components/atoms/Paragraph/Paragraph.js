import styled, { css } from 'styled-components';

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 20px;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Heading;
