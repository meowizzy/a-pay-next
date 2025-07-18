import { httpGet } from "@shared/config/httpClient";
import { createEffect, createEvent, createStore, sample } from "effector";
import { NextPageContext } from "next";
import { createQuery } from "@farfetched/core";

export const getGlobalData = ({ locale = "ru" }: { locale: string }) => {
  return httpGet({
    url: "/api/global",
    params: {
      populate: "socials",
      locale,
    },
  });
};

export const globalDataStarted = createEvent<any>();

// export const $global = createStore<any>({}, { sid: "global" });
export const globalStartedFx = createEffect<{ locale: string }, any>(
  getGlobalData,
);

export const firstQuery = createQuery({
  effect: globalStartedFx,
});

// $global.on(globalStartedFx.doneData, (_, data) => data);

// sample({
//   clock: globalDataStarted,
//   target: firstQuery.start,
// });
