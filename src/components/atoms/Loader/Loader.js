import React from 'react';
import styled from 'styled-components';
import { useLoading, Bars } from '@agney/react-loading';
import { theme } from '../../../theme/MainTheme';

const StyledWrapper = styled.div`
  width: 85vw;
  height: 100vh;
  display: fixed;
  align-items: center;
  justify-content: center;
`;

export default function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="100" color={theme.orange} />,
  });

  return (
    <StyledWrapper>
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
    </StyledWrapper>
  );
}
