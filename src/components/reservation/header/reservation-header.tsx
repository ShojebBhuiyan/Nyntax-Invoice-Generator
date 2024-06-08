import React from 'react';
import InvoiceButton from './invoice-button';

export default function ReservationHeader() {
  return (
    <div className='flex justify-between'>
      <h1 className='text-2xl font-bold'>Reservation</h1>
      <InvoiceButton />
    </div>
  );
}
