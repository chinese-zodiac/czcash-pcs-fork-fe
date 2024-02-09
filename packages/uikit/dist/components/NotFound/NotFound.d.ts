import { JSXElementConstructor, ReactNode } from "react";
declare const NotFound: ({ statusCode, children, LinkComp, }: {
    LinkComp: JSXElementConstructor<any>;
    statusCode?: number | undefined;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default NotFound;
