"use client";

import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input'; import { useRentalInfo } from '@/providers/rental-info-provider';
import { ReservationFormSchema } from '@/schemas/reservation-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function ReservationForm() {
  const form = useForm<z.infer<typeof ReservationFormSchema>>({
    resolver: zodResolver(ReservationFormSchema),
    defaultValues: {
      pickupDateTime: '',
      returnDateTime: '',
      duration: '',
      discount: '',
    }
  });

  const rentalContext = useRentalInfo();

  return (
    <Form {...form}>
      <form className='pt-5'>
        <div className='space-y-5'>
          <FormField
            control={form.control}
            name='reservationId'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Reservation ID</FormLabel>
                <Input
                  {...field}
                  type='text'
                  onChange={(e) => {
                    rentalContext?.setReservationId(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pickupDateTime'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Date <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='datetime-local'
                  placeholder='Select Date and Time'
                  onChange={(e) => {
                    rentalContext?.setPickupDateTime(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='returnDateTime'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Return Date <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='datetime-local'
                  placeholder='Select Date and Time'
                  onChange={(e) => {
                    rentalContext?.setReturnDateTime(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='duration'
            render={({ field }) => (
              <FormItem className='flex justify-between items-center'>
                <FormLabel>Duration</FormLabel>
                <div>
                  <Input
                    {...field}
                    type='text'
                    placeholder='1 Week 1 Day'
                    onChange={(e) => {
                      rentalContext?.setDuration(e.target.value);
                    }}
                  />
                </div>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='discount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount</FormLabel>
                <Input
                  {...field}
                  type='text'
                  onChange={(e) => {
                    rentalContext?.setDiscount(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
        </div>

      </form>
    </Form>
  );
}
