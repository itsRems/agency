import { CalculatorInput, Games } from "@/lib/schemas";

export async function POST(request: Request) {
  const body: CalculatorInput = await request.json();

  console.log(body);

  console.log(Games.safeParse(body.game));

  return Response.json({ body });
}
