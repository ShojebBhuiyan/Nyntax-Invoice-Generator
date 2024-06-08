"use client";

import { collisionDamageWaiverValue } from '@/constants/additional-information-constants';
import Image from 'next/image';
import React from 'react';
import ChargesTable from '../reservation/charges-summary/charges-table';
import { useRentalInfo } from '@/providers/rental-info-provider';
import { formatDateTime } from '@/lib/formatDateTime';

export default function Invoice() {

  const rentalContext = useRentalInfo();

  return (
    <div className='container pt-5 grid grid-cols-2 gap-2'>
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <Image src="/images/invoice-logo.PNG" alt="logo" width={100} height={100} />
          <div className='grid grid-cols-1'>
            <h1 className='text-md font-bold'>RENTER INFO</h1>
            <p className='text-sm font-normal'>{rentalContext?.firstName + " " + rentalContext?.lastName}</p>
            <p className='text-sm font-normal'>{rentalContext?.email}</p>
            <p className='text-sm font-normal'>{`PH: ${rentalContext?.phone}`}</p>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1'>
            <p className='text-sm font-normal'>CH Car Place Inc</p>
            <p className='text-sm font-normal'>162 Bergen st</p>
            <p className='text-sm font-normal'>Brookly, NY 11213</p>
            <p className='text-sm font-normal'>PH#</p>

            <p className='text-sm font-normal'>Monday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Tuesday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Wednesday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Thursday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Friday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Saturday 9:00 AM - 6:00 PM</p>
            <p className='text-sm font-normal'>Sunday 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className='col-span-2 gap-2'>
          <h1 className='text-md font-bold'>{`ADDITIONAL AUTHORIZED DRIVER(S)`}</h1>
          <h1 className='text-md font-bold'>{`UNIT DETAILS`}</h1>
          <p className='text-sm font-normal'>{`Unit: ${rentalContext?.vehicle?.make + " " + rentalContext?.vehicle?.model}`}</p>
          <p className='text-sm font-normal'>{`Make & Model: ${rentalContext?.vehicle?.make + " " + rentalContext?.vehicle?.model}`}</p>


          <p className='text-sm font-normal'>{`BILL TO: ${name}`}</p>
          <p className='text-sm font-normal'>{`Payment Type: Unpaid`}</p>
          <p className='text-sm font-normal'>{`AUTH: $0.00`}</p>

          <p className="text-sm font-normal">Referral: </p>
          <p className="text-sm font-normal">{`NOTICE: Collision Insurance (CDW)- $${collisionDamageWaiverValue} per day`}</p>
          <p className="text-sm font-normal">{`Limits liability of damages to one's own vehicle up to $1000 in event of an accident,`}</p>
          <p className="text-sm font-normal">{`by waiving this coverage renter agrees to be hold liable for damages up to the entire value of the vehicle.`}</p>
          <div className='flex justify-evenly items-center'>
            <p className="text-sm font-normal">Accept</p>
            <p className="text-sm font-normal">Reject</p>
          </div>
          <p className="text-sm font-normal">{`Rental service may be refused anyone when done in the best interest of the renting company or customer - Rates do not include gasoline. - Reserves the right to collect deposit covering estimated rental charges.`}</p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-2'>
        <h1 className='text-lg font-bold'>Reservation</h1>
        <h2 className='text-lg font-bold'>{`RA #${rentalContext?.reservationId}`}</h2>
        <p className="text-sm font-normal">CLAIM:</p>
        <p className="text-sm font-normal">{`Date/Time Out: ${formatDateTime(rentalContext?.pickupDateTime!)}`}</p>
        <p className="text-sm font-normal">{`Date/Time In: ${formatDateTime(rentalContext?.returnDateTime!)}`}</p>

        <div className='bg-gray-400'>
          <h1 className='text-2xl font-bold'>CHARGE SUMMARY</h1>
          <ChargesTable mode='invoice' />
        </div>

        <p className='text-sm font-normal'>Your rental agreement offers, for an additional charge, an optional waiver to cover all or a part of your responsibility for damge to or loss of the vehicle: Before deciding whether to purchase the waiver, you may wish to determine whether your own automobile insurance or credit card agreement provides you coverage for rental vehicle damge or loss and determine the amount of the deductible under your own insurance coverage. The purchase of the waiver is not mandatory. The waiver is not Insurance. I acknowledge that I have received and red a copy of this.</p>
        <p className='text-sm font-bold'>Renters Signature</p>
        <p className='text-sm font-bold'>--------------------------------</p>
        <p className='text-sm font-bold'>Additional Driver 1</p>
        <p className='text-sm font-bold'>--------------------------------</p>
      </div>
    </div>
  );
}
