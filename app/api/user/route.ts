// app/api/contact/route.ts

// export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  console.log(`name: ${name}`);
  console.log(`email: ${email}`);
  

  return Response.json({ message: 'Data received successfully!' });
}
