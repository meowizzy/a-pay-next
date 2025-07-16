import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  sassOptions: {},
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin("./src/app/config/i18n/request.ts");

export default withNextIntl(nextConfig);
