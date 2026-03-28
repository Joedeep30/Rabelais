import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Verify cron secret (Vercel sends this automatically)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Trigger the report send
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://centrerabelaislyon.fr';
    const res = await fetch(`${baseUrl}/api/admin/report/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return NextResponse.json({ success: true, ...data });
  } catch (error) {
    console.error('Cron weekly report error:', error);
    return NextResponse.json({ error: 'Failed to send report' }, { status: 500 });
  }
}
