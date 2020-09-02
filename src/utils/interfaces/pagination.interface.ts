interface IPaginationSort {
  name: number;
}

export interface IPagination {
  limit: number;
  next: boolean;
  page: number | undefined;
  prev: boolean;
  total: number;
}

export interface IPaginationInput {
  limit: number;
  page: number;
  sort: IPaginationSort;
}
