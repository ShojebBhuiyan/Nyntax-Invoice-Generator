import { z } from 'zod';

export const AdditionalInformationFormSchema = z.object({
  collisionDamageWaiver: z.boolean().optional(),
  liabilityInsurance: z.boolean().optional(),
  rentalTax: z.boolean().optional(),
});