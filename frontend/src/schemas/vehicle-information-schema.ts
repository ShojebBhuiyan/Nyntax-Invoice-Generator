import { z } from 'zod';

export const VehicleInformationFormSchema = z.object({
  type: z.string(),
  vehicle: z.string(),
});