import { NextRequest, NextResponse } from 'next/server';

import { AUTH_TOKEN } from './modules/core/constants/auth.constants';
import { checkAuth } from './modules/login/actions/login-action';

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  try {
    const urlPath = url.pathname.split('/').filter((x: string) => x);
    const authToken = req.cookies.get(AUTH_TOKEN)?.value || '';

    if (urlPath.includes('shared')) {
      return NextResponse.next();
    }

    if (url.pathname === '/login') {
      if (!authToken) {
        return NextResponse.next();
      }

      const resp = await checkAuth(authToken);

      if (!resp.ok) {
        return NextResponse.next();
      }

      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    const resp = await checkAuth(authToken);

    if (!resp.ok) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: '/((?!api|auth/signin|static|.*\\..*|_next).*)',
};
