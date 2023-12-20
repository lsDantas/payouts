import styled from 'styled-components';

type ValueLabelProps = {
  value: string;
  isHeader?: boolean;
};

const ValueContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ValueHeaderText = styled.div`
  text-align: left;
  width: 100px;
`;

const ValuelEntryText = styled(ValueHeaderText)`
  color: #1A1D1F;
  font-weight: bold;
`;

const ValueLabel = ({value, isHeader}: ValueLabelProps) => {
  // Uses different fonts for the column header and the column entries
  const ValueText = isHeader
    ? ValueHeaderText
    : ValuelEntryText;

  return (
    <ValueContainer>
      <ValueText>{value}</ValueText>
    </ValueContainer>
  );
};

export default ValueLabel;
