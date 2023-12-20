import styled from 'styled-components';

const StatusContainer = styled.div`
  display: flex;
  flex-shrink: 1;
`;

const StatusItem = styled.div<{$containerColor: string}>`
  display: flex;
  flex-shrink: 1;
  color: #1A1D1F;
  background-color: ${({$containerColor}) => $containerColor};
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
`;

const StatusIndicator = ({status}: {status: string}) => {
  const containerColor = status === 'Completed'
    ? '#60CA57'
    : '#C1C4C7';

  return (
    <StatusContainer>
      <StatusItem $containerColor={containerColor}>{status}</StatusItem>
    </StatusContainer>
  );
};

export default StatusIndicator;
