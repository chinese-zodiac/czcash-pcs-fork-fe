import React from "react";
interface BottomDrawerProps {
    content: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void | null;
}
declare const BottomDrawer: React.FC<React.PropsWithChildren<BottomDrawerProps>>;
export default BottomDrawer;
