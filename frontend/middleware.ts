import createMiddleware from "next-intl/middleware";
import routing from "@config/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|static|_next|.*\\..*).*)",
};
