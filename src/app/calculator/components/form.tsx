"use client";

import { CalculatorInput } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function CalculatorForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof CalculatorInput>>({
    resolver: zodResolver(CalculatorInput),
    defaultValues: {
      game: "chess",
      playerCount: 2,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CalculatorInput>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    await fetch("/api/calculator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="game"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Game</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
