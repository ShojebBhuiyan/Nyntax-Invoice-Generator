import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import ReservationForm from './reservation-form';

export default function ReservationCard() {
  return (
    <Card>
      <CardContent>
        <ReservationForm />
      </CardContent>
    </Card>
  );
}
