import { Separator } from '@/components/ui/separator';
import React from 'react';
import CustomerCard from './customer-card';

export default function CustomerDetails() {
  return (
    <div className='flex flex-col'>
      <div className='space-y-2'>
        <h2 className='text-xl font-bold'>
          Customer Information
        </h2>
        <Separator className='bg-[#5D5CFF]' />
      </div>
      <div className='pt-5'>
        <CustomerCard />
      </div>
    </div>
  );
}
