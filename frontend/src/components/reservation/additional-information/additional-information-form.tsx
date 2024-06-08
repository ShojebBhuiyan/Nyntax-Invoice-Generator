"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { collisionDamageWaiverValue, liabilityInsuranceValue, rentalTaxValue } from '@/constants/additional-information-constants';
import { AdditionalInformationFormSchema } from '@/schemas/additional-information-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function AdditionalInformationForm() {
  const form = useForm<z.infer<typeof AdditionalInformationFormSchema>>({
    resolver: zodResolver(AdditionalInformationFormSchema),
    defaultValues: {
      collisionDamageWaiver: false,
      liabilityInsurance: false,
      rentalTax: false,
    }
  });

  return (
    <Form {...form}>
      <form className='pt-5'>
        <div className='space-y-5'>
          <FormField
            control={form.control}
            name='collisionDamageWaiver'
            render={({ field }) => (
              <FormItem className='flex items-center gap-2'>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FormLabel className="flex w-full pb-2 justify-between font-normal items-center">
                  <p>Collision Damage Waiver</p>
                  <p>{`$${collisionDamageWaiverValue}`}</p>
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='liabilityInsurance'
            render={({ field }) => (
              <FormItem className='flex gap-2 items-center'>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FormLabel className="flex w-full pb-2 justify-between font-normal">
                  <p>Liability Insurance</p>
                  <p>{`$${liabilityInsuranceValue}`}</p>
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='rentalTax'
            render={({ field }) => (
              <FormItem className='flex gap-2 items-center'>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FormLabel className="flex w-full pb-2 justify-between font-normal">
                  <p>Rental Tax</p>
                  <p>{`${rentalTaxValue}%`}</p>
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
