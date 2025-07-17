import { AppConfig, useTranslations } from "next-intl";

export function useAppTranslations<
  N extends keyof AppConfig["Messages"] = "common",
>(namespace?: N): ReturnType<typeof useTranslations<N>> {
  return useTranslations<N>(namespace ?? ("common" as N));
}
