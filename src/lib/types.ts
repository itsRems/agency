import { z } from "zod";

export const CalculatorInput = z.object({
  game: z.string(),
  playerCount: z.number(),
});

export type CalculatorInput = z.infer<typeof CalculatorInput>;
