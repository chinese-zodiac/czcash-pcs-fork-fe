import React from "react";
import { SpaceProps } from "styled-system";
interface Props extends SpaceProps {
    onClick?: () => void;
    expanded?: boolean;
}
export declare const ExpandableButton: React.FC<React.PropsWithChildren<Props>>;
export declare const ExpandableLabel: React.FC<React.PropsWithChildren<Props>>;
export {};
