"use client";

import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRentalInfo } from '@/providers/rental-info-provider';
import { CustomerFormSchema } from '@/schemas/customer-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function CustomerForm() {
  const form = useForm<z.infer<typeof CustomerFormSchema>>({
    resolver: zodResolver(CustomerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  });

  const rentalContext = useRentalInfo();

  return (
    <Form {...form}>
      <form className='pt-5'>
        <div className='space-y-5'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">First Name <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='text'
                  onChange={(e) => {
                    rentalContext?.setFirstName(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Last Name <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='text'
                  onChange={(e) => {
                    rentalContext?.setLastName(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Email <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='email'
                  onChange={(e) => {
                    rentalContext?.setEmail(e.target.value);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Phone <span className='text-red-600'>*</span></FormLabel>
                <Input
                  {...field}
                  type='tel'
                  onChange={(e) => {
                    rentalContext?.setPhone(e.target.value);
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
