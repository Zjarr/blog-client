import React from 'react';

import { BarContainer, BodyContainer, Day, HeadContainer, Number } from './bar.style';
export const BarChart: React.FC<IBarChart> = ({ day, number, height }) => {
  return (
    <BarContainer>
      <HeadContainer>
        <Number>{number}</Number>
        <Day>{day}</Day>
      </HeadContainer>

      <BodyContainer height={height} />
    </BarContainer>
  );
};

interface IBarChart {
  day: string;
  height: number;
  number: number;
}
