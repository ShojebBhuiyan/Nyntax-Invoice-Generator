import { Separator } from '@/components/ui/separator';
import React from 'react';
import ReservationCard from './reservation-card';

export default function ReservationDetails() {
  return (
    <div className='flex flex-col'>
      <div className='space-y-2'>
        <h2 className='text-xl font-bold'>
          Reservation Details
        </h2>
        <Separator className='bg-[#5D5CFF]' />
      </div>
      <div className='pt-5'>
        <ReservationCard />
      </div>
    </div>
  );
}
