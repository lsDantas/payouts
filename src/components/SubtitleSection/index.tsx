import styled from 'styled-components';

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const DecorativeBlock = styled.div`
  background-color: #999DFF;
  width: 1.25rem;
  height: 2.5rem;
  border-radius: 5px;
`;

const SubtitleText = styled.h2`
  color: #1a1d1f;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SubtitleSection = () => (
  <>
    <SubtitleContainer>
      <DecorativeBlock />
      <SubtitleText>Payout History</SubtitleText>
    </SubtitleContainer>
  </>
);

export default SubtitleSection;
