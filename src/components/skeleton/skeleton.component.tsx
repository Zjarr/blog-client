import React from 'react';

import { SkeletonContainer } from './skeleton.style';

export const Skeleton: React.FC<ISkeleton> = ({ ...rest }) => {
  return (
    <SkeletonContainer {...rest} />
  );
};

interface ISkeleton {
  border?: string;
  height?: string;
  margin?: string;
  width?: string;
}
