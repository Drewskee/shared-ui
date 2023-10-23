declare module "@infini-ui/react-add-to-calendar";

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "\*.svg" {
  // import React = require("react");
  // const src: React.FC<React.SVGProps<SVGSVGElement>> | 
  const src: string;
  export default src;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.css";
declare module "*.scss";

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }


// declare module "*.svg" {
//   import * as React from "react";

//   const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   export default ReactComponent;
// }
