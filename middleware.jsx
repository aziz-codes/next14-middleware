import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const cookies =
    (await request.cookies.get("next-auth.session-token")?.value) || "";

  const isPublicPath = path === "/login";

  if (isPublicPath && cookies) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !cookies) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/products", "/account", "/login", "/users", "/about"],
};
