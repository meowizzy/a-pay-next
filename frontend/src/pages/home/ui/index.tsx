import { BannerSection } from "./sections/banner";
import { allSettled, fork, serialize } from "effector";
import { getGlobalData, globalDataStarted } from "@shared/api/global";
import { createQuery } from "@farfetched/core";

const HomePage = () => {
  // console.log(values, "VALUES");

  return <BannerSection />;
};

export default HomePage;
