import { Separator } from '@/components/ui/separator';
import React from 'react';
import VehicleInformationCard from './vehicle-card';

export default function VehicleInformation() {
  return (
    <div className='flex flex-col'>
      <div className='space-y-2'>
        <h2 className='text-xl font-bold'>
          Vehicle Information
        </h2>
        <Separator className='bg-[#5D5CFF]' />
      </div>
      <div className='pt-5'>
        <VehicleInformationCard />
      </div>
    </div>
  );
}
