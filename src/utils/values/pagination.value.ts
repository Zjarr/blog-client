import { IPaginationInput } from '../interfaces';

export const PAGINATION_DEFAULT: IPaginationInput = {
  limit: 10,
  page: 1,
  sort: {
    name: 1
  }
};
