import React from 'react';
import ChargeRow from './charge-row';

interface WeeklyChargesProps {
  unit: number;
  rate: number;
}

export default function WeeklyCharges({ unit, rate }: WeeklyChargesProps) {
  return (
    <ChargeRow charge='Weekly' unit={unit} rate={rate} />
  );
}
