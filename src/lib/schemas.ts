import { z } from "zod";

export const Games = z.enum([
  "minecraft",
  "arma3",
  "project_zomboid",
  "palworld",
]);

export const CalculatorInput = z.object({
  game: z.union([Games, z.string()]),
  playerCount: z.number(),
});

export type CalculatorInput = z.infer<typeof CalculatorInput>;

export const CalculatorOutputPricingType = z.enum([
  "absolute", // Fixed pricing
  "scale", // Starting at <x>
  "custom", // Custom pricing, needs contact
]);

export const CalculatorOutput = z.object({
  pricingType: CalculatorOutputPricingType,
  price: z.number(),
});
