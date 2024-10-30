import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const { auth } = NextAuth(authConfig);

const locales = ["en", "bn"];
const defaultLocale = "en";

// Check locale preference in browser and get final locale based on the locales and defaultLocale
const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language");
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export default auth((request) => {
  const {
    nextUrl: { pathname, search },
    url,
  } = request;

  // Determine locale
  const localeInPathname = locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // Redirect if no locale in the URL
  if (!localeInPathname) {
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, url);
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  // Set locale based on the pathname
  const locale = localeInPathname;
  const localizedRoot = `/${locale}`;
  const localizedLogin = `${localizedRoot}/login`;

  // Public routes dynamically determined based on locale
  const PUBLIC_ROUTES = [
    `${localizedRoot}/login`,
    `${localizedRoot}/register`,
    `${localizedRoot}/shop`,
    `${localizedRoot}/cart`,
    `${localizedRoot}/wishlist`,
    `${localizedRoot}/track-order`,
  ];

  // Private route protection
  const isAuthenticated = !!request.auth;

  const isPublicRoute =
    PUBLIC_ROUTES.some((route) => pathname.startsWith(route)) ||
    pathname === localizedRoot;

  // Redirect to login if the route is not public and user is not authenticated
  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(localizedLogin, url));
  }

  // Proceed to the next 
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
