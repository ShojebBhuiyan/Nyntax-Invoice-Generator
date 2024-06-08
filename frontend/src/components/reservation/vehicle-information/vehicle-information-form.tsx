"use client";
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VehicleInformationFormSchema } from '@/schemas/vehicle-information-schema';
import { Car } from '@/types/car';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface VehicleInformationFormProps {
  carsList: {
    [key: string]: Car[];
  };
}

export default function VehicleInformationForm({ carsList }: VehicleInformationFormProps) {
  const form = useForm<z.infer<typeof VehicleInformationFormSchema>>({
    resolver: zodResolver(VehicleInformationFormSchema),
    defaultValues: {
      type: '',
      vehicle: '',
    }
  });

  return (
    <Form {...form}>
      <form className='pt-5'>
        <div className='space-y-5'>
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehicle Type<span className='text-red-600'>*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a vehicle type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      Object.keys(carsList).map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='vehicle'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehicle <span className='text-red-600'>*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a vehicle" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      carsList[form.getValues("type")]?.map((car) => (
                        <SelectItem key={car.id} value={car.id}>{`${car.make} ${car.model}`}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
