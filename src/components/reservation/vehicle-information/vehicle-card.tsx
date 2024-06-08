import React from 'react';
import CardWrapper from '../card-wrapper';
import VehicleInformationForm from './vehicle-information-form';
import { getCarsList } from '@/actions/get-cars-list-action';

export default async function VehicleInformationCard() {
  const carList = await getCarsList();
  return (
    <CardWrapper>
      <VehicleInformationForm
        carsList={carList}
      />
    </CardWrapper>
  );
}
