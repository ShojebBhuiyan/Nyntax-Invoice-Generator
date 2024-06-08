import { Separator } from '@/components/ui/separator';
import React from 'react';
import ChargesTable from './charges-table';

export default function ChargesSummary() {
  return (
    <div className='flex flex-col'>
      <div className='space-y-2'>
        <h2 className='text-xl font-bold'>
          Charges Summary
        </h2>
        <Separator className='bg-[#5D5CFF]' />
      </div>
      <div className='pt-5'>
        <ChargesTable mode="form" />
      </div>
    </div>
  );
}
