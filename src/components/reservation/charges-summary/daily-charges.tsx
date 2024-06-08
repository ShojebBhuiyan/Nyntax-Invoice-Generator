import React from 'react';
import ChargeRow from './charge-row';

interface DailyChargesProps {
  unit: number;
  rate: number;
}

export default function DailyCharges({ unit, rate }: DailyChargesProps) {
  return (
    <ChargeRow charge='Daily' unit={unit} rate={rate} />
  );
}
