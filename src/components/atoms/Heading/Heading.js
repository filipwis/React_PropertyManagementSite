import styled, { css } from 'styled-components';

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.medium};
  line-height: 20px;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
    `}
  ${({ light }) =>
    light &&
    css`
      font-weight: ${({ theme }) => theme.light};
    `}
  ${({ semi }) =>
    semi &&
    css`
      font-weight: ${({ theme }) => theme.semiBold};
    `}
`;

export default Heading;
