import styled from 'styled-components';
import useSWR from 'swr';

import PayoutGridRow from './PayoutGridRow';
import ValueLabel from '../common/ValueLabel';
import {parsePayoutResponse} from '../../utils/parseEntries';

import type {SWRResponse} from 'swr';
import type {PayoutParseResults} from '../../utils/parseEntries';
import {fetcher} from '../../services/fetchers';

const PayoutGridContainer = styled.div`
  display: grid;
  justify-items: start;
  justify-content: space-around;
  grid-template-columns: 2fr 1fr 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const PayoutGridColumHeader = styled.div`
  color: #6F767E;
  padding: 10px;
  justify-self: stretch;
  font-weight: 500;
  font-size: 0.85rem;
`;

const PlaceholderLabel = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 2rem;
  padding: 4rem;
`;

const PayoutListSection = () => {
  const response: SWRResponse = useSWR(import.meta.env.VITE_PAYOUTS_API, fetcher);

  // Handle loading and errors
  if (response.isLoading) {
    return (<PlaceholderLabel>Loading...</PlaceholderLabel>);
  }

  if (response?.error) {
    return (<PlaceholderLabel>Oops...something happened.</PlaceholderLabel>);
  }

  // Parse data
  const {payoutEntries, isValid}: PayoutParseResults = parsePayoutResponse(response);

  if (!isValid) {
    return (<PlaceholderLabel>Oops...something happened.</PlaceholderLabel>);
  }

  return (
    <>
      <PayoutGridContainer>
        <PayoutGridColumHeader>
          Date & Time
        </PayoutGridColumHeader>
        <PayoutGridColumHeader>
          Status
        </PayoutGridColumHeader>
        <PayoutGridColumHeader>
          <ValueLabel value='Value' isHeader={true} />
        </PayoutGridColumHeader>

        {payoutEntries.map((payoutEntry, idx) =>
          <PayoutGridRow
            key={`payout-row-${idx}`}
            payoutEntry={payoutEntry}
            rowIdx={idx}
          />)
        }
      </PayoutGridContainer>
    </>
  );
};

export default PayoutListSection;
