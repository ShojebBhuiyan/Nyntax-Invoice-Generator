import React from 'react';

interface ChargeRowProps {
  charge: string;
  unit: number;
  rate: number;
}

export default function ChargeRow({ charge, unit, rate }: ChargeRowProps) {
  return (
    <div className='grid grid-cols-12 justify-between'>
      <div className='col-span-6'>
        <p className='font-normal'>{charge}</p>
      </div>
      <div className='col-span-2'>
        <p className='font-normal'>{unit}</p>
      </div>
      <div className='col-span-2'>
        <p className='font-normal'>{`$${rate}`}</p>
      </div>
      <div className='col-span-2'>
        <p className='font-normal'>{`$${unit * rate}`}</p>
      </div>
    </div>
  );
}
