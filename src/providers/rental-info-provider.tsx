"use client";

import { createContext, useContext, useState } from "react";

interface RentalContextType {
  reservationId: string;
  setReservationId: (reservationId: string) => void;
  pickupDateTime: string;
  setPickupDateTime: (pickupDateTime: string) => void;
  returnDateTime: string;
  setReturnDateTime: (returnDateTime: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  discount: string;
  setDiscount: (discount: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  vehicle: {
    make: string;
    model: string;
    hourlyRate: number;
    dailyRate: number;
    weeklyRate: number;
  } | undefined;
  setVehicle: (
    vehicle: {
      make: string;
      model: string;
      hourlyRate: number;
      dailyRate: number;
      weeklyRate: number;
    }) => void;
  collisionDamageWaiver: boolean;
  setCollisionDamageWaiver: (collisionDamageWaiver: boolean) => void;
  liabilityInsurance: boolean;
  setLiabilityInsurance: (liabilityInsurance: boolean) => void;
  rentalTax: boolean;
  setRentalTax: (rentalTax: boolean) => void;
}

const RentalContext = createContext<RentalContextType | undefined>(undefined);

export default function RentalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reservationId, setReservationId] = useState<string>("");
  const [pickupDateTime, setPickupDateTime] = useState<string>("");
  const [returnDateTime, setReturnDateTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [vehicle, setVehicle] =
    useState<
      {
        make: string;
        model: string;
        hourlyRate: number;
        dailyRate: number;
        weeklyRate: number;
      } | undefined
    >
      (undefined);
  const [collisionDamageWaiver, setCollisionDamageWaiver] = useState<boolean>(false);
  const [liabilityInsurance, setLiabilityInsurance] = useState<boolean>(false);
  const [rentalTax, setRentalTax] = useState<boolean>(false);

  const context = {
    reservationId,
    setReservationId,
    pickupDateTime,
    setPickupDateTime,
    returnDateTime,
    setReturnDateTime,
    duration,
    setDuration,
    discount,
    setDiscount,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    vehicle,
    setVehicle,
    collisionDamageWaiver,
    setCollisionDamageWaiver,
    liabilityInsurance,
    setLiabilityInsurance,
    rentalTax,
    setRentalTax,
  };

  return (
    <RentalContext.Provider value={context}>{children}</RentalContext.Provider>
  );
}

export function useRentalInfo() {
  const context = useContext(RentalContext);
  return context;
}