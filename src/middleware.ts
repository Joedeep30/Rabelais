import { NextRequest, NextResponse } from 'next/server';
import { verifySession, COOKIE_NAME } from '@/lib/admin-auth';

export async function middleware(request: NextRequest) {
  // Only protect /admin/jeffos/dashboard routes
  if (request.nextUrl.pathname.startsWith('/admin/jeffos/dashboard') || 
      request.nextUrl.pathname.startsWith('/api/admin/report') ||
      request.nextUrl.pathname.startsWith('/api/admin/gbp')) {
    
    const token = request.cookies.get(COOKIE_NAME)?.value;
    
    if (!token) {
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin/jeffos', request.url));
    }

    const isValid = await verifySession(token);
    if (!isValid) {
      if (request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Session expirée' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/admin/jeffos', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/jeffos/dashboard/:path*', '/api/admin/report/:path*', '/api/admin/gbp/:path*'],
};
