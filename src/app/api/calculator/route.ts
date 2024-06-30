import { CalculatorInput } from "@/lib/types";

export async function POST(request: Request) {
  const res: CalculatorInput = await request.json();

  console.log(res);

  return Response.json({ res });
}
