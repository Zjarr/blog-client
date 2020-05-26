import React from 'react';

import {
  useQuery
} from '../../lib/hooks';

export const BlogsBlogPage: React.FC<{}> = () => {
  const query = useQuery();

  const categories = query.get('categories');
  const keywords = query.get('keywords');

  return (
    <>
      <h1>Blog: Blogs</h1>

      {categories && <p>{categories}</p>}
      {keywords && <p>{keywords}</p>}
    </>
  );
};
