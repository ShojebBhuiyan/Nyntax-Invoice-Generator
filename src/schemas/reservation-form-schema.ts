import { z } from 'zod';

export const ReservationFormSchema = z.object({
  reservationId: z.string().optional(),
  pickupDateTime: z.string(),
  returnDateTime: z.string(),
  duration: z.string().optional(),
  discount: z.string().optional(),
});