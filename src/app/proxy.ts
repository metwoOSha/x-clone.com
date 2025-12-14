import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function proxy(request: NextRequest) {
    const response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;

    if (!user && !pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (user && pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/((?!api|_next|favicon.ico|.*\\.(svg|png|jpg|jpeg|gif|webp)).*)'],
};
