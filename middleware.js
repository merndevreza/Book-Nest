import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "bn"];
const defaultLocale = "en";

//check locale preference in browser and get final locale based on the locales and defaultLocale

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language");
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  // check if the user already added a locale in url
  const localeInPathname = locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (!localeInPathname) {
    const locale = getLocale(request);
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    redirectUrl.search = searchParams;
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
