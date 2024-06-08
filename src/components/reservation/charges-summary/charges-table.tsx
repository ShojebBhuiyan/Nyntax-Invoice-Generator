"use client";

import { Separator } from '@/components/ui/separator';
import { useRentalInfo } from '@/providers/rental-info-provider';
import React from 'react';
import DailyCharges from './daily-charges';
import WeeklyCharges from './weekly-charges';
import HourlyCharges from './hourly-charges';
import { collisionDamageWaiverValue, liabilityInsuranceValue, rentalTaxValue } from '@/constants/additional-information-constants';
import AdditionalChargeRow from './additional-charge-row';

interface ChargesTableProps {
  mode: 'form' | 'invoice',
}

export default function ChargesTable({ mode }: ChargesTableProps) {

  const rentalContext = useRentalInfo();

  const total = (
    (rentalContext?.vehicle ? rentalContext?.vehicle?.hourlyRate! : 0) +
    (rentalContext?.vehicle ? rentalContext?.vehicle?.dailyRate! : 0) +
    (rentalContext?.vehicle ? rentalContext?.vehicle?.weeklyRate! : 0) +
    (rentalContext?.collisionDamageWaiver ? collisionDamageWaiverValue : 0) +
    (rentalContext?.liabilityInsurance ? liabilityInsuranceValue : 0));

  const tax = rentalContext?.rentalTax ? total * (rentalTaxValue / 100) : 0;

  const totalWithTax = total + tax;


  return (
    <div className='container flex flex-col space-y-2 py-5 rounded-md'
      style={
        mode === 'invoice' ?
          {} :
          {
            background: '#DFDFFF',
            borderColor: '#5D5CFF',
            borderWidth: '1px',
          }
      }
    >
      <div className='grid grid-cols-12 justify-between'>
        <div className='col-span-6'>
          <p className='font-bold'>Charge</p>
        </div>
        <div className='col-span-2'>
          <p className='font-bold'>Unit</p>
        </div>
        <div className='col-span-2'>
          <p className='font-bold'>Rate</p>
        </div>
        <div className='col-span-2'>
          <p className='font-bold'>Total</p>
        </div>
      </div>
      {mode === "form" && (<Separator className="bg-[#5D5CFF]" />)}
      <HourlyCharges
        unit={rentalContext?.vehicle ? 1 : 0}
        rate={rentalContext?.vehicle ? rentalContext?.vehicle?.hourlyRate! : 0}
      />
      <DailyCharges
        unit={rentalContext?.vehicle ? 1 : 0}
        rate={rentalContext?.vehicle ? rentalContext?.vehicle?.dailyRate! : 0}
      />
      <WeeklyCharges
        unit={rentalContext?.vehicle ? 1 : 0}
        rate={rentalContext?.vehicle ? rentalContext?.vehicle?.weeklyRate! : 0}
      />

      {rentalContext?.collisionDamageWaiver && (
        <AdditionalChargeRow
          charge='Collision Damage Waiver'
          rate={collisionDamageWaiverValue}
        />
      )}
      {rentalContext?.liabilityInsurance && (
        <AdditionalChargeRow
          charge='Liability Insurance'
          rate={liabilityInsuranceValue}
        />
      )}
      {rentalContext?.rentalTax && (
        <AdditionalChargeRow
          charge='Rental Tax'
          rate={collisionDamageWaiverValue}
          total={tax}
        />
      )}
      <div className='grid grid-cols-12'>
        <p className='font-bold col-span-10'>Total</p>
        <p className='font-bold'>{`$${totalWithTax}`}</p>
      </div>
    </div>
  );
}
