import styled from 'styled-components';

// Title styling
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleText = styled.h1`
  color: #272b30;
`;

const HeaderSection = () => (
  <>
    <TitleContainer>
      <TitleText>Payouts</TitleText>
    </TitleContainer>
  </>
);

export default HeaderSection;
