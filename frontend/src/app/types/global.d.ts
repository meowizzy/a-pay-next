// declare module "*.svg" {
//   const content: string;
//   export default content;
// }
//
declare module "*.svg?jsx" {
  import { type FC, type SVGProps } from "react";
  const SVG: FC<SVGProps<SVGElement> & { title?: string }>;
  export default SVG;
}
