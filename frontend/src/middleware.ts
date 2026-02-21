import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next({
        request: { headers: request.headers },
    });

    // Build a server-side Supabase client that can read cookies
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({ name, value, ...options });
                    response.cookies.set({ name, value, ...options });
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({ name, value: "", ...options });
                    response.cookies.set({ name, value: "", ...options });
                },
            },
        }
    );

    // Fetch the current session (refreshes tokens automatically)
    const { data: { user } } = await supabase.auth.getUser();

    const isDoctorRoute = pathname.startsWith("/doctor");
    const isPatientRoute = pathname.startsWith("/patient");

    // ── Not logged in → send to login ──────────────────────────────────────
    if ((isDoctorRoute || isPatientRoute) && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (user) {
        const role = user.user_metadata?.role as string | undefined;

        // ── Doctor visiting patient routes → redirect to doctor dashboard ──
        if (isPatientRoute && role === "doctor") {
            return NextResponse.redirect(new URL("/doctor/dashboard", request.url));
        }

        // ── Patient visiting doctor routes → redirect to patient dashboard ──
        if (isDoctorRoute && role === "patient") {
            return NextResponse.redirect(new URL("/patient/dashboard", request.url));
        }

        // ── Logged-in user visiting /login or /signup → send to their dash ──
        if (pathname === "/login" || pathname === "/signup") {
            const destination = role === "doctor" ? "/doctor/dashboard" : "/patient/dashboard";
            return NextResponse.redirect(new URL(destination, request.url));
        }
    }

    return response;
}

export const config = {
    matcher: [
        "/doctor/:path*",
        "/patient/:path*",
        "/login",
        "/signup",
        "/dashboard/:path*",  // keep old path guarded too
    ],
};
