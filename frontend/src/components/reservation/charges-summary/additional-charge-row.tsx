import React from 'react';

interface AdditionalChargeRowProps {
  charge: string;
  rate: number;
  total?: number;
}

export default function AdditonalChargeRow({ charge, rate, total }: AdditionalChargeRowProps) {
  return (
    <div className='grid grid-cols-12 justify-between'>
      <div className='col-span-8'>
        <p className='font-normal'>{charge}</p>
      </div>
      <div className='col-span-2'>
        <p className='font-normal'>{`$${rate}`}</p>

      </div>
      <div className='col-span-2'>
        <p className='font-normal'>{`$${total ? total : rate}`}</p>
      </div>
    </div>
  );
}
