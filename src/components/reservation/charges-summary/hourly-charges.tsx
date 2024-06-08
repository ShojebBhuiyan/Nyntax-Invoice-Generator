import React from 'react';
import ChargeRow from './charge-row';

interface HourlyChargesProps {
  unit: number;
  rate: number;
}

export default function HourlyCharges({ unit, rate }: HourlyChargesProps) {
  return (
    <ChargeRow charge='Hourly' unit={unit} rate={rate} />
  );
}
