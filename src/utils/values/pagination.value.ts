import { IPagination } from '../interfaces';

export const PAGINATION_DEFAULT: IPagination = {
  limit: 10,
  page: 1,
  sort: {
    name: 1
  }
};
