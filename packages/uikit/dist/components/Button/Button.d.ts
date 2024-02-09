import { ElementType } from "react";
import { ButtonProps } from "./types";
declare const Button: {
    <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
};
export default Button;
