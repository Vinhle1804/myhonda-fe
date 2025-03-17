import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get('sessionToken')?.value || 'Không có cookie';

  return Response.json({ sessionToken });
}

