import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import routing from "./routing";

const namespaces = ["common", "home"];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (ns) => {
        const data = await import(`./locales/${locale}/${ns}.json`);
        return [ns, data.default];
      }),
    ),
  );

  return {
    locale,
    messages,
  };
});
