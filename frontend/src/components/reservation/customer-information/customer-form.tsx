"use client";

import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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
                />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
