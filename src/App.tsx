import styled from 'styled-components';

import './App.css';
import HeaderSection from './components/HeaderSection';
import PayoutListSection from './components/PayoutListSection';
import SubtitleSection from './components/SubtitleSection';

const PayoutHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

function App() {
  return (
    <>
      <HeaderSection />
      <PayoutHistoryContainer>
        <SubtitleSection />
        <PayoutListSection />
      </PayoutHistoryContainer>
    </>
  );
}

export default App;
