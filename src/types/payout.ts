import type {DateTime} from 'luxon';

export type PayoutEntry = {
  dateAndTime: DateTime;
  status: string;
  value: string;
  username: string;
};

export type PayoutResponseMetadata = {
  page: number;
  limit: number;
  totalCount: number;
};
