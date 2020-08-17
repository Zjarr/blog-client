interface IPaginationSort {
  name: number;
}

export interface IPagination {
  limit: number;
  page: number;
  sort: IPaginationSort;
}
