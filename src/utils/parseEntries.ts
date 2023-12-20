import {isObject} from 'lodash';
import {parseString, parseNumber, parseDate} from './parsing';

import type {PayoutEntry, PayoutResponseMetadata} from '../types/payout';
import type {SWRResponse} from 'swr';

export type PayoutParseResults = {
  payoutEntries: PayoutEntry[];
  payoutMetadata?: PayoutResponseMetadata;
  isValid: boolean;
};

const invalidResponseResults: PayoutParseResults = {
  payoutEntries: [],
  payoutMetadata: undefined,
  isValid: false,
};

const parsePayoutEntry = (entry: unknown): PayoutEntry => {
  if (!isObject(entry)) {
    throw new Error('Parsing error: Payout entry is not a JavaScript object.');
  }

  if (
    'dateAndTime' in entry
    && 'status' in entry
    && 'value' in entry
    && 'username' in entry
  ) {
    return {
      dateAndTime: parseDate(entry.dateAndTime),
      status: parseString(entry.status),
      value: parseString(entry.value),
      username: parseString(entry.username),
    };
  }

  throw new Error('Parsing error: Unable to parse payout-entry fields.');
};

const parsePayoutEntries = (entries: unknown): PayoutEntry[] => {
  if (!Array.isArray(entries)) {
    throw new Error('Parsing error: Payout entries are not an array.');
  }

  const parsedEntries = entries.map(parsePayoutEntry);

  return parsedEntries;
};

const parseMetadata = (metadata: unknown): PayoutResponseMetadata => {
  if (!isObject(metadata)) {
    throw new Error('Parsing error: Metadata is not an object.');
  }

  if (
    'page' in metadata
    && 'limit' in metadata
    && 'totalCount' in metadata
  ) {
    return {
      page: parseNumber(metadata.page),
      limit: parseNumber(metadata.limit),
      totalCount: parseNumber(metadata.totalCount),
    };
  }

  throw new Error('Parsing error: Unable to parse payout metadata fields.');
};

export const parsePayoutResponse = (response: SWRResponse): PayoutParseResults => {
  if (
    !response?.data
    && !response.data?.data
    && !response.data?.metadata
  ) {
    return invalidResponseResults;
  }

  const payoutEntries: unknown = response.data.data;
  // eslint-disable-next-line prefer-destructuring
  const metadata: unknown = response.data.metadata;

  try {
    const parsedPayoutEntries = parsePayoutEntries(payoutEntries);
    const parsedMetadata = parseMetadata(metadata);

    return {
      payoutEntries: parsedPayoutEntries,
      payoutMetadata: parsedMetadata,
      isValid: true,
    };
  } catch (error) {
    return invalidResponseResults;
  }
};
