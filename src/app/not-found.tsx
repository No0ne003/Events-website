"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const defaultLocale = "fr";
  const availableLocales = ["en", "fr", "ar"];

  useEffect(() => {
    const hasLocale = availableLocales.some((loc) =>
      pathname.startsWith(`/${loc}`),
    );

    const locale = defaultLocale;

    if (!hasLocale) {
      const newPath = `/${locale}${pathname}`;
      redirect(newPath);
    }
  }, [pathname]);

  return null;
};

export default NotFound;
