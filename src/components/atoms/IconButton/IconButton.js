import styled from 'styled-components';

const IconButton = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: transparent;
  border: none;

  &.active {
    background-color: white;
  }
`;

export default IconButton;
