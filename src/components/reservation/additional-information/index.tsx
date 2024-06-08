import { Separator } from '@/components/ui/separator';
import React from 'react';
import AdditionalInformationCard from './additional-information-card';

export default function AdditionalInformation() {
  return (
    <div className='flex flex-col'>
      <div className='space-y-2'>
        <h2 className='text-xl font-bold'>
          Additional Information
        </h2>
        <Separator className='bg-[#5D5CFF]' />
      </div>
      <div className='pt-5'>
        <AdditionalInformationCard />
      </div>
    </div>
  );
}
