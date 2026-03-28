import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_SECRET || 'rabelais-admin-secret-key-2026-ultra-secure'
);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Rabelais2026!';
const COOKIE_NAME = 'rabelais_admin_session';

export async function verifyPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}

export async function createSession(): Promise<string> {
  const token = await new SignJWT({ role: 'admin', iat: Date.now() })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(SECRET);
  return token;
}

export async function verifySession(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);
  if (!session?.value) return false;
  return verifySession(session.value);
}

export { COOKIE_NAME };
