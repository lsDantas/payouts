import styled from 'styled-components';
import StatusIndicator from './StatusIndicator';
import ValueLabel from '../../common/ValueLabel';

import type {PayoutEntry} from '../../../types/payout';

type PayoutGridProps = {
  payoutEntry: PayoutEntry;
  rowIdx: number;
};

const PayoutGridItem = styled.div<{$useAlternateBackground?: boolean}>`
  padding: 10px;
  background-color: ${({$useAlternateBackground}) => $useAlternateBackground ? '#F8F8F8' : '#inherit'};
  justify-self: stretch;
`;

const DateTimeText = styled.div`
  color: #6F767E;
  font-weight: bold;
`;

const PayoutGridRow = ({payoutEntry, rowIdx}: PayoutGridProps) => {
  // Alternate background color between rows
  const useAlternateBackground = rowIdx % 2 === 0;
  const dateLabel = payoutEntry.dateAndTime.toFormat('EEE, MMM d, h:mm');

  return (
    <>
      <PayoutGridItem
        key={`payout-${rowIdx}-date`}
        $useAlternateBackground={useAlternateBackground}
      >
        <DateTimeText>{dateLabel}</DateTimeText>
      </PayoutGridItem>
      <PayoutGridItem
        key={`payout-${rowIdx}-status`}
        $useAlternateBackground={useAlternateBackground}
      >
        <StatusIndicator status={payoutEntry.status} />
      </PayoutGridItem>
      <PayoutGridItem
        key={`payout-${rowIdx}-value`}
        $useAlternateBackground={useAlternateBackground}
      >
        <ValueLabel value={payoutEntry.value} />
      </PayoutGridItem>
    </>
  );
};

export default PayoutGridRow;
